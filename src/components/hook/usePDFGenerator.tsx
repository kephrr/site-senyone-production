import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export type QuestionAnswer = number | string | number[];

export interface SavingsData {
  weeklyCost: number;
  annualCost: number;
  automatableHours: number;
  weeklySavings: number;
  monthlySavings:number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
}

export interface AnswersData {
  volume: QuestionAnswer;
  cout: QuestionAnswer;
  taux: QuestionAnswer;
}

export const usePDFGenerator = () => {
  const generatePDFReport = async (
    answers: AnswersData,
    savings: SavingsData,
    fileName: string = `analyse-automatisation-${Date.now()}`
  ) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const colors = {
      primary: '#00929E',
      primaryLight: '#E6F7F9',
      primaryDark: '#007a85',
      secondary: '#E44849',
      secondaryLight: '#FDEAEA',
      dark: '#1E1E1E',
      light: '#FFFFFF',
      gray: '#6B7280',
      grayLight: '#F9FAFB',
      grayBorder: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B'
    };
    // Propriétés du document (métadonnées)
    pdf.setProperties({
      title: "Rapport d'analyse d'automatisation - SENYONE",
      subject: 'Évaluation du potentiel d\'automatisation et de ROI',
      author: 'SENYONE Automation Solutions',
      keywords: 'automatisation, optimisation, productivité, ROI, analyse, SENYONE',
      creator: 'SENYONE Analytics Platform'
    });

    // En-tête professionnel
    const headerHeight = 30;
    
    // Logo en haut à gauche
    try {
      // const logoDataUri = await getImageDataUrl(logoPng);
      // pdf.addImage(logoDataUri, 'PNG', 20, 15, 25, 0);
    } catch (e) {
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(parseInt(colors.primary.slice(1, 3), 16), 
                      parseInt(colors.primary.slice(3, 5), 16), 
                      parseInt(colors.primary.slice(5, 7), 16));
      pdf.text('SENYONE', 25, 22);
    }

    // Titre principal centré
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    pdf.text('RAPPORT D\'ANALYSE', 105, 22, { align: 'center' });
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');

    // Date et référence à droite
    pdf.setFontSize(9);
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    pdf.text(`Réf: S${Date.now().toString().slice(-6)}`, 190, 18, { align: 'right' });
    // pdf.text(`Émis le: ${dateStr}`, 190, 22, { align: 'right' });
    // pdf.text(`Heure: ${timeStr}`, 190, 26, { align: 'right' });

    // Ligne de séparation élégante
    pdf.setDrawColor(parseInt(colors.primary.slice(1, 3), 16), 
                    parseInt(colors.primary.slice(3, 5), 16), 
                    parseInt(colors.primary.slice(5, 7), 16));
    pdf.setLineWidth(0.5);
    pdf.line(20, 32, 190, 32);
    
    // Début du contenu
    let yPos = 45;

    // Introduction
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    const introText = "Ce rapport présente une analyse détaillée du potentiel d'automatisation de vos " +
                    "processus répétitifs, basée sur les données fournies. L'évaluation inclut une projection " +
                    "des gains de productivité, des économies financières et du retour sur investissement (ROI).";
    
    const splitIntro = pdf.splitTextToSize(introText, 150);
    const introX = 105;
    pdf.text(splitIntro, introX, yPos, { align: 'center' });
    yPos += splitIntro.length * 6 + 15;

    // Section 1: Données d'entrée avec fond coloré
    pdf.setFillColor(parseInt(colors.primaryLight.slice(1, 3), 16), 
                    parseInt(colors.primaryLight.slice(3, 5), 16), 
                    parseInt(colors.primaryLight.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.primaryDark.slice(1, 3), 16), 
                    parseInt(colors.primaryDark.slice(3, 5), 16), 
                    parseInt(colors.primaryDark.slice(5, 7), 16));
    pdf.text('1. DONNÉES D\'ENTRÉE', 25, yPos + 5.5);
    yPos += 15;

    const inputData = [
      ['Paramètre', 'Valeur', 'Unité', 'Description'],
      ['Volume horaire hebdomadaire', answers.volume.toString(), 'heures', 'Tâches répétitives par semaine'],
      ['Coût horaire moyen', answers.cout.toString(), 'FCFA/h', 'Coût incluant charges sociales'],
      ['Taux d\'automatisation estimé', answers.taux.toString() + '', '%', 'Potentiel d\'automatisation']
    ];

    // Tableau des données d'entrée avec style amélioré
    autoTable(pdf, {
      startY: yPos,
      margin: { left: 20, right: 20 },
      head: [inputData[0]],
      body: inputData.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 5,
        lineColor: [parseInt(colors.grayBorder.slice(1, 3), 16), 
                  parseInt(colors.grayBorder.slice(3, 5), 16), 
                  parseInt(colors.grayBorder.slice(5, 7), 16)],
        lineWidth: 0.1,
        halign: 'center'
      },
      headStyles: {
        fillColor: [parseInt(colors.primary.slice(1, 3), 16), 
                  parseInt(colors.primary.slice(3, 5), 16), 
                  parseInt(colors.primary.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 10,
        cellPadding: 6
      },
      bodyStyles: {
        textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                  parseInt(colors.dark.slice(3, 5), 16), 
                  parseInt(colors.dark.slice(5, 7), 16)]
      },
      alternateRowStyles: {
        fillColor: [parseInt(colors.grayLight.slice(1, 3), 16), 
                  parseInt(colors.grayLight.slice(3, 5), 16), 
                  parseInt(colors.grayLight.slice(5, 7), 16)]
      },
      columnStyles: {
        0: { 
          fontStyle: 'bold',
          cellWidth: 45,
          halign: 'left'
        },
        1: { 
          fontStyle: 'bold',
          textColor: [parseInt(colors.secondary.slice(1, 3), 16), 
                    parseInt(colors.secondary.slice(3, 5), 16), 
                    parseInt(colors.secondary.slice(5, 7), 16)],
          cellWidth: 30
        },
        2: {
          cellWidth: 25,
          textColor: [parseInt(colors.gray.slice(1, 3), 16), 
                     parseInt(colors.gray.slice(3, 5), 16), 
                     parseInt(colors.gray.slice(5, 7), 16)]
        },
        3: {
          cellWidth: 70,
          textColor: [parseInt(colors.gray.slice(1, 3), 16), 
                     parseInt(colors.gray.slice(3, 5), 16), 
                     parseInt(colors.gray.slice(5, 7), 16)],
          halign: 'left'
        }
      }
    });
      
    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 20;

    // Vérifier si on doit créer une nouvelle page
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 2: Résultats clés avec graphique visuel
    pdf.setFillColor(parseInt(colors.secondaryLight.slice(1, 3), 16), 
                    parseInt(colors.secondaryLight.slice(3, 5), 16), 
                    parseInt(colors.secondaryLight.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.secondary.slice(1, 3), 16), 
                    parseInt(colors.secondary.slice(3, 5), 16), 
                    parseInt(colors.secondary.slice(5, 7), 16));
    pdf.text('2. RÉSULTATS CLÉS', 25, yPos + 5.5);
    yPos += 15;

  // Métriques principales - CENTRÉES PARFAITEMENT
const metrics = [
  {
    title: 'ÉCONOMIES ANNUELLES',
    value: savings.annualSavings.toLocaleString('fr-FR'),
    unit: '',
    color: colors.secondary,
    icon: ''
  },
  {
    title: 'TEMPS OPTIMISÉ',
    value: savings.automatableHours.toString(),
    unit: 'h/semaine',
    color: colors.primary,
    icon: ''
  },
  {
    title: 'RETOUR SUR INVESTISSEMENT',
    value: savings.roi.toString(),
    unit: 'annuel',
    color: colors.success,
    icon: ''
  },
  {
    title: 'DÉLAI DE RENTABILITÉ',
    value: savings.paybackPeriod.toString(),
    unit: 'mois',
    color: colors.warning,
    icon: ''
  }
];

// Positionnement centré des 4 cartes (2x2) avec centrage parfait
const cardWidth = 85;
const cardHeight = 30;
const horizontalGap = 10;
const verticalGap = 10;

// Calculer la position de départ pour centrer le groupe
const totalWidth = (cardWidth * 2) + horizontalGap;
const startX = 20 + (170 - totalWidth) / 2;

for (let i = 0; i < metrics.length; i++) {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = startX + col * (cardWidth + horizontalGap);
  const currentY = yPos + row * (cardHeight + verticalGap);

  // Carte avec ombre légère
  pdf.setDrawColor(220, 220, 220);
  pdf.setFillColor(255, 255, 255);
  pdf.roundedRect(x, currentY, cardWidth, cardHeight, 3, 3, 'FD');
  
  // Bordure colorée en haut
  pdf.setFillColor(parseInt(metrics[i].color.slice(1, 3), 16), 
                  parseInt(metrics[i].color.slice(3, 5), 16), 
                  parseInt(metrics[i].color.slice(5, 7), 16));
  pdf.roundedRect(x, currentY, cardWidth, 5, 3, 3, 'F');

  // Titre - Centré PARFAITEMENT avec ligne de séparation
  pdf.setFontSize(7); // Taille fixe plus petite pour tous les titres
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                  parseInt(colors.dark.slice(3, 5), 16), 
                  parseInt(colors.dark.slice(5, 7), 16));
  
  // Diviser le titre en plusieurs lignes si nécessaire
  const title = metrics[i].title;
  const maxCharsPerLine = 20;
  let titleLines: string[] = [];
  
  if (title.length <= maxCharsPerLine) {
    titleLines = [title];
  } else {
    // Diviser les titres longs en deux lignes
    const words = title.split(' ');
    let line1 = '';
    let line2 = '';
    
    for (const word of words) {
      if ((line1 + word).length <= maxCharsPerLine && !line2) {
        line1 += (line1 ? ' ' : '') + word;
      } else {
        line2 += (line2 ? ' ' : '') + word;
      }
    }
    
    titleLines = [line1, line2];
  }
  
  // Ajuster la position Y en fonction du nombre de lignes
  let titleY = currentY + 8;
  if (titleLines.length === 1) {
    titleY = currentY + 10;
  }
  
  // Dessiner chaque ligne du titre
  titleLines.forEach((line, lineIndex) => {
    const lineY = titleY + (lineIndex * 3.5);
    pdf.text(line, x + (cardWidth / 2), lineY, { align: 'center' });
  });

  // Ligne de séparation sous le titre
  pdf.setDrawColor(220, 220, 220);
  pdf.setLineWidth(0.1);
  const separatorY = currentY + (titleLines.length === 1 ? 15 : 18);
  pdf.line(x + 10, separatorY, x + cardWidth - 10, separatorY);

  // Valeur - Centrée PARFAITEMENT
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(parseInt(metrics[i].color.slice(1, 3), 16), 
                  parseInt(metrics[i].color.slice(3, 5), 16), 
                  parseInt(metrics[i].color.slice(5, 7), 16));
  
  const valueText = metrics[i].value;
  const unitText = metrics[i].unit;
  
  // Calculer la largeur totale du texte (valeur + unité)
  pdf.setFontSize(14);
  const valueWidth = pdf.getTextWidth(valueText);
  pdf.setFontSize(8);
  const unitWidth = unitText ? pdf.getTextWidth(` ${unitText}`) : 0;
  const totalTextWidth = valueWidth + unitWidth;
  
  // Position de départ pour centrer
  const textStartX = x + (cardWidth - totalTextWidth) / 2;
  const valueY = separatorY + 10;
  
  // Dessiner la valeur
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(parseInt(metrics[i].color.slice(1, 3), 16), 
                  parseInt(metrics[i].color.slice(3, 5), 16), 
                  parseInt(metrics[i].color.slice(5, 7), 16));
  pdf.text(valueText, textStartX, valueY);
  
  // Dessiner l'unité si elle existe
  if (unitText) {
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    pdf.text(` ${unitText}`, textStartX + valueWidth, valueY);
  }
  
  // Réinitialiser la taille de police
  pdf.setFontSize(8);
}

yPos += 75; // Ajustement après les cartes // Ajustement après les cartes

    // Vérifier si on doit créer une nouvelle page
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 3: Analyse détaillée
    pdf.setFillColor(parseInt(colors.grayLight.slice(1, 3), 16), 
                    parseInt(colors.grayLight.slice(3, 5), 16), 
                    parseInt(colors.grayLight.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    pdf.text('3. ANALYSE DÉTAILLÉE', 25, yPos + 5.5);
    yPos += 15;

    const detailedAnalysis = [
      ['Description', 'Hebdomadaire', 'Mensuel', 'Annuel'],
      ['Coût actuel', 
       `${savings.weeklyCost.toLocaleString('fr-FR')} FCFA`, 
       `${savings.monthlySavings.toLocaleString('fr-FR')} FCFA`, 
       `${savings.annualCost.toLocaleString('fr-FR')} FCFA`],
      ['Économies potentielles', 
       `${savings.weeklySavings.toLocaleString('fr-FR')} FCFA`, 
       `${savings.monthlySavings.toLocaleString('fr-FR')} FCFA`, 
       `${savings.annualSavings.toLocaleString('fr-FR')} FCFA`],
      ['Gain de productivité', 
       `${savings.automatableHours} heures`, 
       `${Math.round(savings.automatableHours * 4.33)} heures`, 
       `${Math.round(savings.automatableHours * 52)} heures`]
    ];

    autoTable(pdf, {
      startY: yPos,
      margin: { left: 20, right: 20 },
      head: [detailedAnalysis[0]],
      body: detailedAnalysis.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 9,
        cellPadding: 5,
        lineColor: [parseInt(colors.grayBorder.slice(1, 3), 16), 
                   parseInt(colors.grayBorder.slice(3, 5), 16), 
                   parseInt(colors.grayBorder.slice(5, 7), 16)],
        lineWidth: 0.1
      },
      headStyles: {
        fillColor: [parseInt(colors.dark.slice(1, 3), 16), 
                   parseInt(colors.dark.slice(3, 5), 16), 
                   parseInt(colors.dark.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 6
      },
      columnStyles: {
        0: { 
          fontStyle: 'bold',
          cellWidth: 55,
          halign: 'left'
        },
        1: { 
          cellWidth: 40,
          halign: 'center',
          fontStyle: 'bold'
        },
        2: {
          cellWidth: 40,
          halign: 'center'
        },
        3: {
          cellWidth: 45,
          halign: 'center',
          fontStyle: 'bold'
        }
      },
      didParseCell: function(data: any) {
        if (data.section === 'body' && data.column.index === 3) {
          data.cell.styles.textColor = [parseInt(colors.success.slice(1, 3), 16), 
                                        parseInt(colors.success.slice(3, 5), 16), 
                                        parseInt(colors.success.slice(5, 7), 16)];
        }
      }
    });

    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 15;

    // Vérifier si on doit créer une nouvelle page pour les recommandations
    if (yPos > 200) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 4: Recommandations
    pdf.setFillColor(parseInt(colors.primary.slice(1, 3), 16), 
                    parseInt(colors.primary.slice(3, 5), 16), 
                    parseInt(colors.primary.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(255, 255, 255);
    pdf.text('4. RECOMMANDATIONS', 25, yPos + 5.5);
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
        halign: 'center'
      },
      headStyles: {
        fillColor: [parseInt(colors.primary.slice(1, 3), 16), 
                   parseInt(colors.primary.slice(3, 5), 16), 
                   parseInt(colors.primary.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 6,
        halign: 'center'
      },
      bodyStyles: {
        textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                   parseInt(colors.dark.slice(3, 5), 16), 
                   parseInt(colors.dark.slice(5, 7), 16)],
        fontSize: 9,
        halign: 'center'
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
          halign: 'center',
          textColor: [parseInt(colors.primary.slice(1, 3), 16), 
                     parseInt(colors.primary.slice(3, 5), 16), 
                     parseInt(colors.primary.slice(5, 7), 16)]
        },
        1: { 
          cellWidth: 30,
          halign: 'center',
          fontStyle: 'bold',
          textColor: [parseInt(colors.secondary.slice(1, 3), 16), 
                     parseInt(colors.secondary.slice(3, 5), 16), 
                     parseInt(colors.secondary.slice(5, 7), 16)]
        },
        2: {
          cellWidth: 90,
          halign: 'center',
          fontStyle: 'normal',
          textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                     parseInt(colors.dark.slice(3, 5), 16), 
                     parseInt(colors.dark.slice(5, 7), 16)]
        }
      }
    });

    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 10;

    // Vérifier l'espace pour la conclusion
    if (yPos > 240) {
      pdf.addPage();
      yPos = 20;
    }

    // Conclusion
    yPos += 10;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    
    const conclusion = "Cette analyse démontre un fort potentiel d'automatisation avec un retour sur investissement " +
                      "significatif. Nous recommandons de débuter par une phase pilote pour valider les hypothèses " +
                      "avant un déploiement à plus grande échelle.";
    
    const conclusionLines = pdf.splitTextToSize(conclusion, 150);
    conclusionLines.forEach((line: string) => {
      if (yPos > 270) {
        pdf.addPage();
        yPos = 20;
      }
      pdf.text(line, 105, yPos, { align: 'center' });
      yPos += 5;
    });

    // Pied de page professionnel
    const pages = pdf.getNumberOfPages();

    for (let i = 1; i <= pages; i++) {
      pdf.setPage(i);
      
      // Ligne de séparation du pied de page
      pdf.setDrawColor(parseInt(colors.grayBorder.slice(1, 3), 16), 
                      parseInt(colors.grayBorder.slice(3, 5), 16), 
                      parseInt(colors.grayBorder.slice(5, 7), 16));
      pdf.setLineWidth(0.1);
      pdf.line(15, 280, 195, 280);

      // Informations de contact
      pdf.setFontSize(8);
      pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                      parseInt(colors.gray.slice(3, 5), 16), 
                      parseInt(colors.gray.slice(5, 7), 16));
      
      // Gauche : Copyright
      pdf.text('© 2024 SENYONE Automation Solutions', 20, 285);
      
      // Centre : Confidentialité
      pdf.text('DOCUMENT CONFIDENTIEL', 105, 285, { align: 'center' });
      
      // Droite : Contacts
      pdf.text('contact@senyone.com', 190, 285, { align: 'right' });

      // Numéro de page
      pdf.setTextColor(parseInt(colors.primary.slice(1, 3), 16), 
                      parseInt(colors.primary.slice(3, 5), 16), 
                      parseInt(colors.primary.slice(5, 7), 16));
      pdf.text(`Page ${i} / ${pages}`, 105, 290, { align: 'center' });
    }

    // Signature sur la dernière page
    const lastPage = pdf.getNumberOfPages();
    pdf.setPage(lastPage);
    
    // Positionner la signature en bas de la dernière page
    const signatureY = Math.min(yPos + 20, 260);
    
    // Ligne de signature
    pdf.setDrawColor(parseInt(colors.grayBorder.slice(1, 3), 16), 
                    parseInt(colors.grayBorder.slice(3, 5), 16), 
                    parseInt(colors.grayBorder.slice(5, 7), 16));
    pdf.setLineWidth(0.3);
    pdf.line(30, signatureY, 80, signatureY);
    
    // Texte de signature
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    pdf.text('L\'équipe d\'expertise en automatisation', 30, signatureY + 5);

    // Sauvegarder le PDF
    pdf.save(`${fileName}.pdf`);
  };
  
  return { generatePDFReport };
};

