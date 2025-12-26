import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CompanyInfo } from '@/types/formTypes';
import {calculateSavings as calculateSavingsUtil} from "@/components/helpers/QuestionHelp"
import logoPng from "@/assets/images/logosenyone-copie.png"
import {NeuePlak} from '@/assets/fonts/NeuePlak-Regular-normal'
import {NeueBold} from '@/assets/fonts/NeuePlak-Bold-bold'

async function getImageDataUrl(url: string): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas context not available'));
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (ev) => reject(new Error('Failed to load image for logo'));
    img.src = url;
  });
}

export const generatePDF = async (customAnswers: Record<string, any>, companyInfo?: CompanyInfo) => {
      const savings = calculateSavingsUtil(customAnswers);
      const pdf = new jsPDF('p', 'mm', 'a4');
      

      pdf.addFileToVFS('NeuePlak-Regular.ttf', NeuePlak);
      pdf.addFont('NeuePlak-Regular.ttf', 'NeuePlak', 'normal');
      
      pdf.addFileToVFS('NeuePlak-Bold.ttf', NeueBold);
      pdf.addFont('NeuePlak-Bold.ttf', 'NeuePlak', 'bold');

      // --- CONFIGURATION ET DIMENSIONS ---
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const MARGIN = 20;
      const centerX = pageWidth / 2;
      const contentWidth = pageWidth - (MARGIN * 2);

      const colors = {
          primary: '#1E3A8A',
          primaryLight: '#EFF6FF',
          primaryDark: '#1E40AF',
          secondary: '#F59E0B',
          dark: '#111827',
          gray: '#6B7280',
          grayLight: '#F9FAFB',
          grayBorder: '#E5E7EB',
          success: '#10B981'
      };

      // Helper pour un formatage propre (évite les bugs d'espaces insécables)
      const formatCurrency = (num: number) => {
          return new Intl.NumberFormat('fr-FR').format(Math.round(num)).replace(/\s/g, ' ') + " FCFA";
      };

      const formatNumber = (num: number) => {
          return new Intl.NumberFormat('fr-FR').format(Math.round(num)).replace(/\s/g, ' ') + "";
      };

      const currentDate = new Date();
      const dateStr = currentDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      const timeStr = currentDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

      // --- EN-TÊTE ---
      try {
          const logoDataUri = await getImageDataUrl(logoPng);
          pdf.addImage(logoDataUri, 'PNG', MARGIN, 15, 25, 0);
      } catch (e) {
          pdf.setFontSize(16);
          pdf.setFont('NeuePlak', 'bold');
          pdf.setTextColor(colors.primary);
          pdf.text('SENYONE', MARGIN, 22);
      }

      if (companyInfo) {
          pdf.setFontSize(9);
          pdf.setFont('NeuePlak', 'bold');
          pdf.setTextColor(colors.dark);
          pdf.text(companyInfo.companyName, pageWidth - MARGIN, 18, { align: 'right' });
          
          pdf.setFont('NeuePlak', 'normal');
          pdf.setFontSize(8);
          let infoY = 22;
          if (companyInfo.nomCompletPerson) {
              pdf.text(`${companyInfo.nomCompletPerson}${companyInfo.position ? ` (${companyInfo.position})` : ''}`, pageWidth - MARGIN, infoY + 4, { align: 'right' });
              infoY += 4;
          }
          pdf.text(`${companyInfo.email}${companyInfo.phone ? ` • ${companyInfo.phone}` : ''}`, pageWidth - MARGIN, infoY + 4, { align: 'right' });
      }

      // --- TITRE ---
      let yPos = 45;
      pdf.setFontSize(17);
      pdf.setFont('NeuePlak', 'bold');
      pdf.setTextColor(colors.dark);
      pdf.text('RAPPORT D\'ANALYSE D\'AUTOMATISATION', centerX, yPos, { align: 'center' });
      
      yPos += 7;
      pdf.setFontSize(12);
      pdf.setFont('NeuePlak', 'normal');
      pdf.text(`Préparé pour : ${companyInfo?.companyName || 'Votre entreprise'}`, centerX, yPos, { align: 'center' });

      yPos += 10;
      pdf.setFontSize(9);
      pdf.setTextColor(colors.gray);
      pdf.text(`Réf: S607612 | Émis le: ${dateStr} à ${timeStr}`, MARGIN, yPos);

      yPos += 4;
      pdf.setDrawColor(colors.primary);
      pdf.setLineWidth(0.5);
      pdf.line(MARGIN, yPos, pageWidth - MARGIN, yPos);

      // --- RÉSUMÉ EXÉCUTIF (CORRIGÉ) ---
      yPos += 15;
      pdf.setFontSize(11);
      pdf.setFont('NeuePlak', 'normal');
      pdf.setTextColor(colors.dark);

      const summaryText = `Cette analyse démontre que l'automatisation des processus répétitifs pourrait générer des économies annuelles de ${formatCurrency(savings.annualSavings)} pour ${companyInfo?.companyName || 'votre entreprise'}, avec un retour sur investissement de ${savings.roi}% et un délai de rentabilité de ${savings.paybackPeriod} mois.`;

      // Découpage propre du texte
      const wrappedSummary = pdf.splitTextToSize(summaryText, contentWidth);
      
      wrappedSummary.forEach((line: string) => {
          // align: center avec centerX garantit que le texte ne colle pas à gauche
          // Ne pas mettre maxWidth ici pour éviter le bug d'espacement des lettres
          pdf.text(line.trim(), centerX, yPos, { align: 'center' });
          yPos += 7;
      });

      yPos += 10;

      // --- SECTION 1 : DONNÉES D'ENTRÉE ---
      pdf.setFillColor(colors.primaryLight);
      pdf.roundedRect(MARGIN, yPos, contentWidth, 8, 1, 1, 'F');
      pdf.setFontSize(11);
      pdf.setFont('NeuePlak', 'bold');
      pdf.setTextColor(colors.primaryDark);
      pdf.text('1. DONNÉES D\'ENTRÉE', MARGIN + 5, yPos + 5.5);
      
      yPos += 12;
      autoTable(pdf, {
          startY: yPos,
          margin: { left: MARGIN, right: MARGIN },
          head: [['Paramètre', 'Valeur', 'Unité', 'Description']],
          body: [
              ['Volume horaire hebdomadaire', customAnswers.volume.toString(), 'heures', 'Tâches répétitives'],
              ['Coût horaire moyen', formatCurrency(customAnswers.cout).replace(' FCFA', ''), 'FCFA/h', 'Coût avec charges'],
              ['Taux d\'automatisation', customAnswers.taux.toString() + '%', '%', 'Potentiel estimé']
          ],
          theme: 'grid',
          styles: { fontSize: 9, cellPadding: 4, halign: 'center' },
          headStyles: { fillColor: colors.primary, textColor: 255 },
          columnStyles: { 0: { halign: 'left', fontStyle: 'bold' }, 3: { halign: 'left' } }
      });

      yPos = (pdf as any).lastAutoTable.finalY + 15;

      // --- SECTION 2 : RÉSULTATS CLÉS (CARTES) ---
      pdf.setFillColor(colors.primaryLight);
      pdf.roundedRect(MARGIN, yPos, contentWidth, 8, 1, 1, 'F');
      pdf.setFontSize(11);
      pdf.setFont('NeuePlak', 'bold');
      pdf.setTextColor(colors.primaryDark);
      pdf.text('2. RÉSULTATS CLÉS ESTIMÉS', MARGIN + 5, yPos + 5.5);
      
      yPos += 12;
      const cardW = (contentWidth - 10) / 2;
      const cardH = 28;
      const metrics = [
          { title: 'ÉCONOMIES ANNUELLES', value: formatCurrency(savings.annualSavings), color: colors.secondary },
          { title: 'TEMPS GAGNÉ / SEMAINE', value: `${savings.automatableHours} h`, color: colors.primary },
          { title: 'ROI (ANNUEL)', value: `${formatNumber(savings.roi)}%`, color: colors.success },
          { title: 'RENTABILITÉ', value: `${savings.paybackPeriod} Mois`, color: colors.primaryDark }
      ];

      metrics.forEach((m, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = MARGIN + col * (cardW + 10);
          const y = yPos + row * (cardH + 8);

          pdf.setDrawColor(230);
          pdf.setFillColor(255, 255, 255);
          pdf.roundedRect(x, y, cardW, cardH, 2, 2, 'FD');
          
          pdf.setFontSize(8);
          pdf.setFont('NeuePlak', 'bold');
          pdf.setTextColor(colors.gray);
          pdf.text(m.title, x + cardW / 2, y + 8, { align: 'center' });

          pdf.setFontSize(12);
          pdf.setTextColor(m.color);
          pdf.text(m.value, x + cardW / 2, y + 18, { align: 'center' });
      });

      yPos += 70;

      pdf.setFillColor(colors.primaryLight);
      pdf.roundedRect(MARGIN, yPos, contentWidth, 8, 1, 1, 'F');
      pdf.setFontSize(11);
      pdf.setFont('NeuePlak', 'bold');
      pdf.setTextColor(colors.primaryDark);
      pdf.text('3. ANALYSE DÉTAILLÉES', MARGIN + 5, yPos + 5.5);
    yPos += 15;

    const detailedAnalysis = [
      ['Description', 'Hebdomadaire', 'Mensuel', 'Annuel'],
      ['Coût actuel', 
       `${formatCurrency(Math.round(savings.weeklyCost))}`, 
       `${formatCurrency(Math.round(savings.annualCost/12))}`, 
       `${formatCurrency(Math.round(savings.annualCost))}`,], 
      ['Économies potentielles', 
       `${formatCurrency(Math.round(savings.weeklySavings))}`, 
       `${formatCurrency(Math.round(savings.monthlySavings))}`, 
       `${formatCurrency(Math.round(savings.annualSavings))}`],
      ['Gain de productivité', 
       `${formatNumber(Math.round(savings.automatableHours))} heures`, 
       `${formatNumber(Math.round(savings.automatableHours * 4.33))} heures`, 
       `${formatNumber(Math.round(savings.automatableHours * 52))} heures`]
    ];

    autoTable(pdf, {
        startY: yPos,
        margin: { left: MARGIN, right: MARGIN },
        head: [['Description', 'Hebdomadaire', 'Mensuel', 'Annuel'],],
        body: [
            ['Coût actuel', 
          `${formatCurrency(Math.round(savings.weeklyCost))}`, 
          `${formatCurrency(Math.round(savings.annualCost/12))}`, 
          `${formatCurrency(Math.round(savings.annualCost))}`,], 
          ['Économies potentielles', 
          `${formatCurrency(Math.round(savings.weeklySavings))}`, 
          `${formatCurrency(Math.round(savings.monthlySavings))}`, 
          `${formatCurrency(Math.round(savings.annualSavings))}`],
          ['Gain de productivité', 
          `${formatNumber(Math.round(savings.automatableHours))} heures`, 
          `${formatNumber(Math.round(savings.automatableHours * 4.33))} heures`, 
          `${formatNumber(Math.round(savings.automatableHours * 52))} heures`]
        ],
        theme: 'grid',
        styles: { 
            fontSize: 9, 
            cellPadding: 4, 
            halign: 'center',
            font: 'NeuePlak',
            textColor: [0, 0, 0]
        },
        headStyles: { 
            fillColor: colors.primary, 
            textColor: 255,
                fontStyle: 'bold',
            font: 'NeuePlak'
        },
        columnStyles: { 
            0: { 
                halign: 'left',
                font: 'NeuePlak'
            }, 
            1: { 
                halign: 'left',
                font: 'NeuePlak'
            } 
        }}
      );


    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 15;

    // Vérifier si on doit créer une nouvelle page pour les recommandations
    if (yPos > 200) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 4: Recommandations
      pdf.setFillColor(colors.primaryLight);
      pdf.roundedRect(MARGIN, yPos, contentWidth, 8, 1, 1, 'F');
      pdf.setFontSize(11);
      pdf.setFont('NeuePlak', 'bold');
      pdf.setTextColor(colors.primaryDark);
      pdf.text('4. RECOMMENDATIONS', MARGIN + 5, yPos + 5.5);
    yPos += 15;

    // Données des recommandations
    const recommendations = [
      {
        phase: 'Phase 1 : Audit & Analyse',
        duration: '2-3 semaines',
        tasks: '• Analyse approfondie des processus\n• Identification des priorités\n• Élaboration du plan d\'action'
      },
      {
        phase: 'Phase 2 : Développement',
        duration: '4-6 semaines',
        tasks: '• Création des automatisations\n• Tests et validation\n• Formation des équipes'
      },
      {
        phase: 'Phase 3 : Déploiement',
        duration: '2-3 semaines',
        tasks: '• Déploiement progressif\n• Monitoring initial\n• Ajustements optimaux'
      },
      {
        phase: 'Phase 4 : Optimisation',
        duration: 'Continue',
        tasks: '• Surveillance des performances\n• Amélioration continue\n• Scaling des solutions'
      }
    ];

    // Création d'un tableau stylé pour les recommandations
    const recommendationData = [
      ['Phase', 'Durée', 'Activités principales']
    ];

    recommendations.forEach(rec => {
      recommendationData.push([
        rec.phase,
        rec.duration,
        rec.tasks
      ]);
    });

    autoTable(pdf, {
      startY: yPos,
      margin: { left: 20, right: 20 },
      head: [recommendationData[0]],
      body: recommendationData.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 9,
        cellPadding: 5,
        lineColor: [parseInt(colors.grayBorder.slice(1, 3), 16), 
                   parseInt(colors.grayBorder.slice(3, 5), 16), 
                   parseInt(colors.grayBorder.slice(5, 7), 16)],
        lineWidth: 0.1,
        halign: 'left'
      },
      headStyles: {
        fillColor: [parseInt(colors.primary.slice(1, 3), 16), 
                   parseInt(colors.primary.slice(3, 5), 16), 
                   parseInt(colors.primary.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 6,
        halign: 'left',
        font: 'NeuePlak',
      },
      bodyStyles: {
        textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                   parseInt(colors.dark.slice(3, 5), 16), 
                   parseInt(colors.dark.slice(5, 7), 16)],
        fontSize: 9,
        halign: 'left',
        font: 'NeuePlak',
      },
      alternateRowStyles: {
        fillColor: [parseInt(colors.grayLight.slice(1, 3), 16), 
                   parseInt(colors.grayLight.slice(3, 5), 16), 
                   parseInt(colors.grayLight.slice(5, 7), 16)]
      },
      columnStyles: {
        0: { 
          fontStyle: 'bold',
          cellWidth: 50,
          halign: 'left',
          textColor: [parseInt(colors.primary.slice(1, 3), 16), 
                     parseInt(colors.primary.slice(3, 5), 16), 
                     parseInt(colors.primary.slice(5, 7), 16)]
        },
        1: { 
          cellWidth: 30,
          halign: 'left',
          fontStyle: 'bold',
          textColor: [parseInt(colors.secondary.slice(1, 3), 16), 
                     parseInt(colors.secondary.slice(3, 5), 16), 
                     parseInt(colors.secondary.slice(5, 7), 16)]
        },
        2: {
          cellWidth: 90,
          halign: 'left',
          fontStyle: 'normal',
          textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                     parseInt(colors.dark.slice(3, 5), 16), 
                     parseInt(colors.dark.slice(5, 7), 16)]
        }
      }
    });

        yPos = (pdf as any).lastAutoTable?.finalY || yPos;
        yPos += 10;

    pdf.setFillColor(colors.primaryLight);
      pdf.roundedRect(MARGIN, yPos, contentWidth, 8, 1, 1, 'F');
      pdf.setFontSize(11);
      pdf.setFont('NeuePlak', 'bold');
      pdf.setTextColor(colors.primaryDark);
      pdf.text('5. RESSOURCES NECESSAIRES ET OBJECTIFS', MARGIN + 5, yPos + 5.5);
      
      yPos += 12;
      autoTable(pdf, {
        startY: yPos,
        margin: { left: MARGIN, right: MARGIN },
        head: [['Ressources nécessaires', 'Objectifs']],
        body: [
            ['\u2713 \u00C9quipe d\u00E9di\u00E9e initiale', `\u2713 ROI positif en ${savings.paybackPeriod} mois`],
            ['\u2713 Outils d\'automatisation (existants)', `\u2713 ${(savings.automatableHours/52).toFixed(2)} heures automatis\u00E9es/semaine`],
            ['\u2713 Budget initial : ' + formatCurrency(savings.implementationCost), `\u2713 Productivit\u00E9 augment\u00E9e de ${Math.round(savings.productivityRate)} %`]
        ],
        theme: 'grid',
        styles: { 
            fontSize: 9, 
            cellPadding: 4, 
            halign: 'center',
            font: 'NeuePlak',
            textColor: [0, 0, 0]
        },
        headStyles: { 
            fillColor: colors.primary, 
            textColor: 255,
            fontStyle: 'bold',
            font: 'NeuePlak'
        },
        columnStyles: { 
            0: { 
                halign: 'left',
                font: 'NeuePlak'
            }, 
            1: { 
                halign: 'left',
                font: 'NeuePlak'
            } 
        }}
      );

        yPos = (pdf as any).lastAutoTable?.finalY || yPos;
        yPos += 10;

        // Vérifier l'espace pour la conclusion
        if (yPos > 240) {
        pdf.addPage();
        yPos = 20;
        }

        // Conclusion personnalisée
        yPos += 10;
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                        parseInt(colors.gray.slice(3, 5), 16), 
                        parseInt(colors.gray.slice(5, 7), 16));
        
        const conclusion = "Cette analyse est basée sur les paramètres que vous avez saisis. Les résultats sont des"+
        " estimations et peuvent varier en fonction de la mise en œuvre réell. Nos experts sont à votre disposition pour discuter de la mise en place de "+
        "ces solutions d'automatisation dans votre entreprise.";
        
        const conclusionLines = pdf.splitTextToSize(conclusion, 150);
        conclusionLines.forEach((line: string) => {
        if (yPos > 270) {
            pdf.addPage();
            yPos = 20;
        }
        pdf.text(line, 105, yPos, { align: 'center' });
        yPos += 5;
        });

      // --- PIED DE PAGE ---
      const pageCount = pdf.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
          pdf.setPage(i);
          pdf.setFontSize(8);
          pdf.setTextColor(colors.gray);
          pdf.line(MARGIN, pageHeight - 15, pageWidth - MARGIN, pageHeight - 15);
          pdf.text(`SENYONE Analytics - Document Confidentiel`, MARGIN, pageHeight - 10);
          pdf.text(`Page ${i} / ${pageCount}`, pageWidth - MARGIN, pageHeight - 10, { align: 'right' });
      }

      return pdf;
  };