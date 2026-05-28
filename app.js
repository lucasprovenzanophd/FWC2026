const teams = [
    { originalIndex: 0, code: 'USA', emoji: '🇺🇸', group: 'Grupo D', names: { es: 'EE. UU.', en: 'USA', pt: 'EUA', it: 'Stati Uniti' } },
    { originalIndex: 1, code: 'MEX', emoji: '🇲🇽', group: 'Grupo A', names: { es: 'México', en: 'Mexico', pt: 'México', it: 'Messico' } },
    { originalIndex: 2, code: 'CAN', emoji: '🇨🇦', group: 'Grupo B', names: { es: 'Canadá', en: 'Canada', pt: 'Canadá', it: 'Canada' } },
    { originalIndex: 3, code: 'RSA', emoji: '🇿🇦', group: 'Grupo A', names: { es: 'Sudáfrica', en: 'South Africa', pt: 'África do Sul', it: 'Sudafrica' } },
    { originalIndex: 4, code: 'KOR', emoji: '🇰🇷', group: 'Grupo A', names: { es: 'Corea del Sur', en: 'South Korea', pt: 'Coreia do Sul', it: 'Corea del Sud' } },
    { originalIndex: 5, code: 'CZE', emoji: '🇨🇿', group: 'Grupo A', names: { es: 'Chequia', en: 'Czechia', pt: 'Chéquia', it: 'Repubblica Ceca' } },
    { originalIndex: 6, code: 'BIH', emoji: '🇧🇦', group: 'Grupo B', names: { es: 'Bosnia y Herz.', en: 'Bosnia & Herz.', pt: 'Bósnia e Herz.', it: 'Bosnia ed Erz.' } },
    { originalIndex: 7, code: 'QAT', emoji: '🇶🇦', group: 'Grupo B', names: { es: 'Qatar', en: 'Qatar', pt: 'Catar', it: 'Qatar' } },
    { originalIndex: 8, code: 'SUI', emoji: '🇨🇭', group: 'Grupo B', names: { es: 'Suiza', en: 'Switzerland', pt: 'Suíça', it: 'Svizzera' } },
    { originalIndex: 9, code: 'BRA', emoji: '🇧🇷', group: 'Grupo C', names: { es: 'Brasil', en: 'Brazil', pt: 'Brasil', it: 'Brasile' } },
    { originalIndex: 10, code: 'MAR', emoji: '🇲🇦', group: 'Grupo C', names: { es: 'Marruecos', en: 'Morocco', pt: 'Marrocos', it: 'Marocco' } },
    { originalIndex: 11, code: 'HAI', emoji: '🇭🇹', group: 'Grupo C', names: { es: 'Haití', en: 'Haiti', pt: 'Haiti', it: 'Haiti' } },
    { originalIndex: 12, code: 'SCO', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'Grupo C', names: { es: 'Escocia', en: 'Scotland', pt: 'Escócia', it: 'Scozia' } },
    { originalIndex: 13, code: 'PAR', emoji: '🇵🇾', group: 'Grupo D', names: { es: 'Paraguay', en: 'Paraguay', pt: 'Paraguai', it: 'Paraguay' } },
    { originalIndex: 14, code: 'AUS', emoji: '🇦🇺', group: 'Grupo D', names: { es: 'Australia', en: 'Australia', pt: 'Austrália', it: 'Australia' } },
    { originalIndex: 15, code: 'TUR', emoji: '🇹🇷', group: 'Grupo D', names: { es: 'Turquía', en: 'Turkey', pt: 'Turquia', it: 'Turchia' } },
    { originalIndex: 16, code: 'GER', emoji: '🇩🇪', group: 'Grupo E', names: { es: 'Alemania', en: 'Germany', pt: 'Alemanha', it: 'Germania' } },
    { originalIndex: 17, code: 'CUW', emoji: '🇨🇼', group: 'Grupo E', names: { es: 'Curazao', en: 'Curacao', pt: 'Curaçao', it: 'Curaçao' } },
    { originalIndex: 18, code: 'CIV', emoji: '🇨🇮', group: 'Grupo E', names: { es: 'Costa de Marfil', en: 'Ivory Coast', pt: 'Costa do Marfim', it: 'Costa d\'Avorio' } },
    { originalIndex: 19, code: 'ECU', emoji: '🇪🇨', group: 'Grupo E', names: { es: 'Ecuador', en: 'Ecuador', pt: 'Equador', it: 'Ecuador' } },
    { originalIndex: 20, code: 'NED', emoji: '🇳🇱', group: 'Grupo F', names: { es: 'Países Bajos', en: 'Netherlands', pt: 'Países Baixos', it: 'Paesi Bassi' } },
    { originalIndex: 21, code: 'JPN', emoji: '🇯🇵', group: 'Grupo F', names: { es: 'Japón', en: 'Japan', pt: 'Japão', it: 'Giappone' } },
    { originalIndex: 22, code: 'SWE', emoji: '🇸🇪', group: 'Grupo F', names: { es: 'Suecia', en: 'Sweden', pt: 'Suécia', it: 'Svezia' } },
    { originalIndex: 23, code: 'TUN', emoji: '🇹🇳', group: 'Grupo F', names: { es: 'Túnez', en: 'Tunisia', pt: 'Tunísia', it: 'Tunisia' } },
    { originalIndex: 24, code: 'BEL', emoji: '🇧🇪', group: 'Grupo G', names: { es: 'Bélgica', en: 'Belgium', pt: 'Bélgica', it: 'Belgio' } },
    { originalIndex: 25, code: 'EGY', emoji: '🇪🇬', group: 'Grupo G', names: { es: 'Egipto', en: 'Egypt', pt: 'Egito', it: 'Egitto' } },
    { originalIndex: 26, code: 'IRN', emoji: '🇮🇷', group: 'Grupo G', names: { es: 'Irán', en: 'Iran', pt: 'Irã', it: 'Iran' } },
    { originalIndex: 27, code: 'NZL', emoji: '🇳🇿', group: 'Grupo G', names: { es: 'Nueva Zelanda', en: 'New Zealand', pt: 'Nova Zelândia', it: 'Nuova Zelanda' } },
    { originalIndex: 28, code: 'ESP', emoji: '🇪🇸', group: 'Grupo H', names: { es: 'España', en: 'Spain', pt: 'Espanha', it: 'Spagna' } },
    { originalIndex: 29, code: 'CPV', emoji: '🇨🇻', group: 'Grupo H', names: { es: 'Cabo Verde', en: 'Cape Verde', pt: 'Cabo Verde', it: 'Capo Verde' } },
    { originalIndex: 30, code: 'KSA', emoji: '🇸🇦', group: 'Grupo H', names: { es: 'Arabia Saudita', en: 'Saudi Arabia', pt: 'Arábia Saudita', it: 'Arabia Saudita' } },
    { originalIndex: 31, code: 'URU', emoji: '🇺🇾', group: 'Grupo H', names: { es: 'Uruguay', en: 'Uruguay', pt: 'Uruguai', it: 'Uruguay' } },
    { originalIndex: 32, code: 'FRA', emoji: '🇫🇷', group: 'Grupo I', names: { es: 'Francia', en: 'France', pt: 'França', it: 'Francia' } },
    { originalIndex: 33, code: 'SEN', emoji: '🇸🇳', group: 'Grupo I', names: { es: 'Senegal', en: 'Senegal', pt: 'Senegal', it: 'Senegal' } },
    { originalIndex: 34, code: 'IRQ', emoji: '🇮🇶', group: 'Grupo I', names: { es: 'Irak', en: 'Iraq', pt: 'Iraque', it: 'Iraq' } },
    { originalIndex: 35, code: 'NOR', emoji: '🇳🇴', group: 'Grupo I', names: { es: 'Noruega', en: 'Norway', pt: 'Noruega', it: 'Norvegia' } },
    { originalIndex: 36, code: 'ARG', emoji: '🇦🇷', group: 'Grupo J', names: { es: 'Argentina', en: 'Argentina', pt: 'Argentina', it: 'Argentina' } },
    { originalIndex: 37, code: 'ALG', emoji: '🇩🇿', group: 'Grupo J', names: { es: 'Argelia', en: 'Algeria', pt: 'Argélia', it: 'Algeria' } },
    { originalIndex: 38, code: 'AUT', emoji: '🇦🇹', group: 'Grupo J', names: { es: 'Austria', en: 'Austria', pt: 'Áustria', it: 'Austria' } },
    { originalIndex: 39, code: 'JOR', emoji: '🇯🇴', group: 'Grupo J', names: { es: 'Jordania', en: 'Jordan', pt: 'Jordânia', it: 'Giordania' } },
    { originalIndex: 40, code: 'POR', emoji: '🇵🇹', group: 'Grupo K', names: { es: 'Portugal', en: 'Portugal', pt: 'Portugal', it: 'Portogallo' } },
    { originalIndex: 41, code: 'COD', emoji: '🇨🇩', group: 'Grupo K', names: { es: 'RD Congo', en: 'DR Congo', pt: 'RD Congo', it: 'RD del Congo' } },
    { originalIndex: 42, code: 'UZB', emoji: '🇺🇿', group: 'Grupo K', names: { es: 'Uzbekistán', en: 'Uzbekistan', pt: 'Uzbequistão', it: 'Uzbekistan' } },
    { originalIndex: 43, code: 'COL', emoji: '🇨🇴', group: 'Grupo K', names: { es: 'Colombia', en: 'Colombia', pt: 'Colômbia', it: 'Colombia' } },
    { originalIndex: 44, code: 'ENG', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'Grupo L', names: { es: 'Inglaterra', en: 'England', pt: 'Inglaterra', it: 'Inghilterra' } },
    { originalIndex: 45, code: 'CRO', emoji: '🇭🇷', group: 'Grupo L', names: { es: 'Croacia', en: 'Croatia', pt: 'Croácia', it: 'Croazia' } },
    { originalIndex: 46, code: 'GHA', emoji: '🇬🇭', group: 'Grupo L', names: { es: 'Ghanconst translations = {
    es: {
        title: "Fifa World Cup 2026",
        subtitle: "TRACKER DE FIGURITAS",
        btnShare: "Copiar Código de Compartir",
        btnCompare: "Intercambiar",
        albumProgress: "Progreso del Álbum",
        statOwnedLabel: "Tengo (Únicas)",
        statMissingLabel: "Faltan",
        statDuplicatesLabel: "Repetidas",
        searchPlaceholder: "Buscar selección...",
        filterAll: "Todas",
        filterMissing: "Faltantes",
        filterDuplicates: "Repetidas",
        tabAll: "Todos los Grupos",
        tabAd: "Grupos A - D",
        tabEh: "Grupos E - H",
        tabIl: "Grupos I - L",
        tabFwc: "Especial (FWC)",
        btnExportImport: "Respaldar / Importar",
        btnReset: "Reiniciar Álbum",
        footerText: "Diseñado con tecnología estática. Se ejecuta completamente en tu navegador.",
        footerAuthor: "Creado por",
        instructionsTitle: "¿Cómo funciona el Tracker?",
        step1Title: "Marcación de figuritas",
        step1Desc: "Haz clic en el número de cualquier figurita para cambiar su estado: Falta (gris), Tengo (verde 🟢) o Repetida (azul 🔵). Vuelve a hacer clic para volver a Falta.",
        step2Title: "Guardado automático",
        step2Desc: "Tus datos se guardan al instante en tu navegador (Local Storage) y no ensucian la dirección URL. Puedes cerrar o recargar la página sin perder nada.",
        step3Title: "Intercambio inteligente",
        step3Desc: "Copia el código de tu progreso con el botón 'Copiar Código'. Con el botón 'Intercambiar', pega el código de tu amigo para ver qué figuritas pueden cambiarse.",
        compareTitle: "Intercambiar con Amigos",
        compareInstruction: "Pega aquí el código del tracker de tu amigo para calcular automáticamente qué figuritas pueden intercambiar:",
        friendLinkPlaceholder: "Código de tracker de tu amigo...",
        btnDoCompareText: "Comparar",
        friendGivesTitle: "Tu amigo te da",
        friendGivesSubtitle: "Figuritas que tu amigo tiene repetidas (State 2) y a ti te faltan (State 0):",
        userGivesTitle: "Tú le das a tu amigo",
        userGivesSubtitle: "Figuritas que tú tienes repetidas (State 2) y a tu amigo le faltan (State 0):",
        compareNoMatches: "Ninguna figurita coincide para este caso.",
        compareInvalidLink: "El enlace o código del amigo no es válido.",
        exportImportTitle: "Respaldar e Importar Datos",
        tabExport: "Exportar",
        tabImport: "Importar",
        exportInstruction: "Copia este código de respaldo y guárdalo en un lugar seguro. Contiene todo tu progreso actual:",
        btnCopyBackupText: "Copiar Código de Respaldo",
        importInstruction: "Pega aquí tu código de respaldo JSON o un código hash completo. Esto sobrescribirá tu estado actual:",
        importPlaceholder: "Pega el código JSON o código hash aquí...",
        importErrorMsgText: "El código proporcionado no es válido.",
        btnDoImportText: "Restaurar Datos",
        resetTitle: "¿Reiniciar Álbum?",
        resetWarning1: "Esta acción borrará todo tu progreso actual y marcará todas las figuritas como faltantes.",
        resetWarning2: "Esta acción no se puede deshacer.",
        btnCancelResetText: "Cancelar",
        btnConfirmResetText: "Sí, borrar todo",
        toastCopyShare: "¡Código de compartir copiado al portapapeles!",
        toastCopyBackup: "¡Código de respaldo copiado!",
        toastImportSuccess: "¡Datos importados con éxito!",
        toastResetSuccess: "El progreso del álbum ha sido reiniciado.",
        noResultsText: "No se encontraron selecciones coincidentes.",
        toastThemeChanged: "¡Tema cambiado!",
        toastCopyShareError: "No se pudo copiar el código al portapapeles.",
        usernameLabel: "Álbum de:",
        usernamePlaceholder: "Nombre...",
        lastUpdateLabel: "Actualizado:",
        friendGivesTitleWithName: "{name} te da",
        userGivesTitleWithName: "Tú le das a {name}",
        friendLastUpdated: "Última actualización de {name}: {date}",
        btnShareImage: "Generar Imagen",
        shareImageTitle: "Resumen para Compartir",
        shareImageInstruction: "Aquí tienes una imagen con el resumen de tu álbum. Haz clic derecho (o mantén presionado en el celular) para descargarla o copiarla:",
        btnDownloadCanvas: "Descargar Imagen",
        btnCopyCanvas: "Copiar al Portapapeles",
        toastCopyImageSuccess: "¡Imagen copiada al portapapeles!",
        toastCopyImageError: "No se pudo copiar la imagen automáticamente. Descárgala o mantén presionado para guardarla.",
        shareImageTooManyMissing: "Demasiadas figuritas faltantes para listar. ¡Compartí el álbum para ver la lista completa!",
        shareImageNoDuplicates: "Ninguna figurita repetida.",
        shareImageNoMissing: "¡Álbum completo! Ninguna figurita faltante.",
        localSecurityNotice: "Nota: Debido a restricciones de seguridad de archivos locales en este navegador, la descarga y copia automática pueden estar limitadas. Mantén presionada la imagen para guardarla.",
        toastIOSDownloadHint: "En iPhone: mantén presionada la imagen para guardarla en Fotos 📷",
        actionShareTitle: "Copiar Código",
        actionShareDesc: "Copia el código de tu progreso para compartirlo con amigos.",
        actionCompareTitle: "Intercambiar",
        actionCompareDesc: "Pega el código de un amigo para ver qué figuritas pueden cambiarse.",
        actionImageTitle: "Generar Imagen",
        actionImageDesc: "Crea un resumen visual de tu progreso listo para guardar.",
        btnResetHeader: "Iniciar Álbum Blanco",
        shareTradeImageTitle: "Imagen de Intercambio",
        shareTradeImageInstruction: "Aquí tienes la imagen con el resumen del intercambio. Haz clic derecho (o mantén presionado en el celular) para descargarla o copiarla:",
        btnCompareImage: "Generar Imagen de Intercambio",
        albumTypeLabel: "Lectura Local",
        incomingCompareTitle: "Comparar Álbum Recibido",
        incomingCompareInstruction: "Has ingresado al sitio con un código de álbum compartido que difiere de tu progreso local. Compara los datos y elige cuál conservar:",
        incomingCompareLabelLocal: "Tú (Local)",
        incomingCompareLabelIncoming: "Recibido",
        btnIncomingOverwrite: "Sobrescribir con el Enlace",
        btnIncomingKeep: "Mantener mi Álbum Local",
        toastIncomingOverwriteSuccess: "¡Álbum sobrescrito con éxito!",
        toastIncomingKeepSuccess: "Se mantuvo el álbum local y se descartó el recibido.",
        yourCollectionLabel: "Tu Colección",
        userLabel: "Tú"
    },
    en: {
        title: "Fifa World Cup 2026",
        subtitle: "STICKER TRACKER",
        btnShare: "Copy Share Code",
        btnCompare: "Trade",
        albumProgress: "Album Progress",
        statOwnedLabel: "Owned (Unique)",
        statMissingLabel: "Missing",
        statDuplicatesLabel: "Duplicates",
        searchPlaceholder: "Search team...",
        filterAll: "All",
        filterMissing: "Missing",
        filterDuplicates: "Duplicates",
        tabAll: "All Groups",
        tabAd: "Groups A - D",
        tabEh: "Groups E - H",
        tabIl: "Groups I - L",
        tabFwc: "Special (FWC)",
        btnExportImport: "Backup / Import",
        btnReset: "Reset Album",
        footerText: "Designed with static technology. Runs entirely in your browser.",
        footerAuthor: "Created by",
        instructionsTitle: "How does the Tracker work?",
        step1Title: "Sticker Marking",
        step1Desc: "Click on any sticker number to change its state: Missing (gray), Owned (green 🟢), or Duplicate (blue 🔵). Click again to return to Missing.",
        step2Title: "Automatic Saving",
        step2Desc: "Your data is instantly saved in your browser (Local Storage) and does not clutter the URL. You can close or reload the page without losing anything.",
        step3Title: "Smart Trading",
        step3Desc: "Copy your progress code using the 'Copy Code' button. Click the 'Trade' button and paste your friend's code to see which stickers you can swap.",
        compareTitle: "Trade with Friends",
        compareInstruction: "Paste your friend's tracker code here to automatically calculate which stickers you can swap:",
        friendLinkPlaceholder: "Friend's tracker code...",
        btnDoCompareText: "Compare",
        friendGivesTitle: "Your friend gives you",
        friendGivesSubtitle: "Stickers your friend has duplicated (State 2) and you are missing (State 0):",
        userGivesTitle: "You give your friend",
        userGivesSubtitle: "Stickers you have duplicated (State 2) and your friend is missing (State 0):",
        compareNoMatches: "No stickers match for this case.",
        compareInvalidLink: "Friend's link or code is invalid.",
        exportImportTitle: "Backup and Import Data",
        tabExport: "Export",
        tabImport: "Import",
        exportInstruction: "Copy this backup code and save it in a safe place. It contains all your current progress:",
        btnCopyBackupText: "Copy Backup Code",
        importInstruction: "Paste your JSON backup code or a full hash code here. This will overwrite your current state:",
        importPlaceholder: "Paste JSON code or hash code here...",
        importErrorMsgText: "The code provided is invalid.",
        btnDoImportText: "Restore Data",
        resetTitle: "Reset Album?",
        resetWarning1: "This action will clear all your current progress and mark all stickers as missing.",
        resetWarning2: "This action cannot be undone.",
        btnCancelResetText: "Cancel",
        btnConfirmResetText: "Yes, delete all",
        toastCopyShare: "Share code copied to clipboard!",
        toastCopyBackup: "Backup code copied!",
        toastImportSuccess: "Data imported successfully!",
        toastResetSuccess: "Album progress has been reset.",
        noResultsText: "No matching teams found.",
        toastThemeChanged: "Theme changed!",
        toastCopyShareError: "Could not copy code to clipboard.",
        usernameLabel: "Album of:",
        usernamePlaceholder: "Name...",
        lastUpdateLabel: "Updated:",
        friendGivesTitleWithName: "{name} gives you",
        userGivesTitleWithName: "You give {name}",
        friendLastUpdated: "Last updated by {name}: {date}",
        btnShareImage: "Generate Image",
        shareImageTitle: "Shareable Summary",
        shareImageInstruction: "Here is an image with your album summary. Right-click or long-press on mobile to save or copy it:",
        btnDownloadCanvas: "Download Image",
        btnCopyCanvas: "Copy to Clipboard",
        toastCopyImageSuccess: "Image copied to clipboard!",
        toastCopyImageError: "Could not copy image automatically. Please download it instead.",
        shareImageTooManyMissing: "Too many missing stickers to list. Share the album to see the full list!",
        shareImageNoDuplicates: "No duplicate stickers.",
        shareImageNoMissing: "Album complete! No missing stickers.",
        localSecurityNotice: "Note: Due to local file security restrictions in this browser, automatic download and copy may be limited. Long press the image to save it.",
        toastIOSDownloadHint: "On iPhone: long-press the image to save it to Photos 📷",
        actionShareTitle: "Copy Code",
        actionShareDesc: "Copy your progress code to share with friends.",
        actionCompareTitle: "Trade",
        actionCompareDesc: "Paste a friend's code to see which stickers you can swap.",
        actionImageTitle: "Generate Image",
        actionImageDesc: "Create a visual summary of your progress ready to save.",
        btnResetHeader: "Start Blank Album",
        shareTradeImageTitle: "Trade Summary Image",
        shareTradeImageInstruction: "Here is the image with your trade summary. Right-click or long-press on mobile to save or copy it:",
        btnCompareImage: "Generate Trade Image",
        albumTypeLabel: "Local Read",
        incomingCompareTitle: "Compare Received Album",
        incomingCompareInstruction: "You have entered the site with a shared album code that differs from your local progress. Compare the data and choose which to keep:",
        incomingCompareLabelLocal: "You (Local)",
        incomingCompareLabelIncoming: "Received",
        btnIncomingOverwrite: "Overwrite with Received",
        btnIncomingKeep: "Keep My Local Album",
        toastIncomingOverwriteSuccess: "Album overwritten successfully!",
        toastIncomingKeepSuccess: "Local album kept and received album discarded.",
        yourCollectionLabel: "Your Collection",
        userLabel: "You"
    },
    pt: {
        title: "Fifa World Cup 2026",
        subtitle: "TRACKER DE FIGURINHAS",
        btnShare: "Copiar Código de Compartilhamento",
        btnCompare: "Trocar",
        albumProgress: "Progresso do Álbum",
        statOwnedLabel: "Tenho (Únicas)",
        statMissingLabel: "Faltando",
        statDuplicatesLabel: "Repetidas",
        searchPlaceholder: "Buscar seleção...",
        filterAll: "Todas",
        filterMissing: "Faltando",
        filterDuplicates: "Repetidas",
        tabAll: "Todos os Grupos",
        tabAd: "Grupos A - D",
        tabEh: "Grupos E - H",
        tabIl: "Grupos I - L",
        tabFwc: "Especial (FWC)",
        btnExportImport: "Backup / Importar",
        btnReset: "Reiniciar Álbum",
        footerText: "Desenvolvido com tecnologia estática. Executado totalmente no seu navegador.",
        footerAuthor: "Criado por",
        instructionsTitle: "Como funciona o Tracker?",
        step1Title: "Marcação de figurinhas",
        step1Desc: "Clique no número de qualquer figurinha para alterar o estado: Faltando (cinza), Tenho (verde 🟢) ou Repetida (azul 🔵). Clique novamente para retornar para Faltando.",
        step2Title: "Salvar automaticamente",
        step2Desc: "Seus dados são salvos instantaneamente no seu navegador (Local Storage) e não afetam a URL. Você pode fechar ou recarregar a página sem perder nada.",
        step3Title: "Troca inteligente",
        step3Desc: "Copie o código do seu progresso usando o botão 'Copiar Código'. Clique no botão 'Trocar' e cole o código do seu amigo para ver quais figurinhas podem ser trocadas.",
        compareTitle: "Trocar com Amigos",
        compareInstruction: "Cole aqui o código do tracker do seu amigo para calcular automaticamente quais figurinhas vocês podem trocar:",
        friendLinkPlaceholder: "Código do tracker do seu amigo...",
        btnDoCompareText: "Comparar",
        friendGivesTitle: "Seu amigo te dá",
        friendGivesSubtitle: "Figurinhas que seu amigo tem repetidas (State 2) e você está precisando (State 0):",
        userGivesTitle: "Você dá ao seu amigo",
        userGivesSubtitle: "Figurinhas que você tem repetidas (State 2) e seu amigo está precisando (State 0):",
        compareNoMatches: "Nenhuma figurinha coincide para este caso.",
        compareInvalidLink: "O link ou código do amigo não é válido.",
        exportImportTitle: "Backup e Importar Dati",
        tabExport: "Exportar",
        tabImport: "Importar",
        exportInstruction: "Copie este código de backup e salve em um local seguro. Ele contém todo o seu progresso atual:",
        btnCopyBackupText: "Copiar Código de Backup",
        importInstruction: "Cole aqui o seu código de backup JSON ou código hash completo. Isso substituirá o seu estado atual:",
        importPlaceholder: "Cole o código JSON ou código hash aqui...",
        importErrorMsgText: "O código fornecido não é válido.",
        btnDoImportText: "Restaurar Dados",
        resetTitle: "Reiniciar Álbum?",
        resetWarning1: "Esta ação apagará todo o seu progresso atual e marcará todas las figurinhas como faltando.",
        resetWarning2: "Esta ação não pode ser desfeita.",
        btnCancelResetText: "Cancelar",
        btnConfirmResetText: "Sim, apagar tudo",
        toastCopyShare: "Código de compartilhamento copiado!",
        toastCopyBackup: "Código de backup copiado!",
        toastImportSuccess: "Dados importados com sucesso!",
        toastResetSuccess: "O progresso do álbum foi reiniciado.",
        noResultsText: "Nenhuma seleção correspondente encontrada.",
        toastThemeChanged: "Tema alterado!",
        toastCopyShareError: "Não foi possível copiar o código para a área de transferência.",
        usernameLabel: "Álbum de:",
        usernamePlaceholder: "Nome...",
        lastUpdateLabel: "Atualizado:",
        friendGivesTitleWithName: "{name} te dá",
        userGivesTitleWithName: "Você dá para {name}",
        friendLastUpdated: "Última atualização de {name}: {date}",
        btnShareImage: "Gerar Imagem",
        shareImageTitle: "Resumen para Compartilhar",
        shareImageInstruction: "Aqui está uma imagem com o resumo do seu álbum. Clique com o botão direito ou pressione e segure no celular para salvar ou copiar:",
        btnDownloadCanvas: "Baixar Imagem",
        btnCopyCanvas: "Copiar para Área de Transferência",
        toastCopyImageSuccess: "Imagem copiada para a área de transferência!",
        toastCopyImageError: "Não foi possível copiar a imagem automaticamente. Baixe a imagem para salvar.",
        shareImageTooManyMissing: "Muitas figurinhas faltando para listar. Compartilhe o álbum para ver a lista completa!",
        shareImageNoDuplicates: "Nenhuma figurinha repetida.",
        shareImageNoMissing: "Álbum completo! Nenhuma figurinha faltando.",
        localSecurityNotice: "Nota: Devido a restrições de segurança de arquivos locais neste navegador, o download e a cópia automática podem estar limitados. Pressione e segure a imagem para salvá-la.",
        toastIOSDownloadHint: "No iPhone: pressione e segure a imagem para salvar nas Fotos 📷",
        actionShareTitle: "Copiar Código",
        actionShareDesc: "Copie o código do seu progresso para compartilhar com amigos.",
        actionCompareTitle: "Trocar",
        actionCompareDesc: "Cole o código de um amigo para ver quais figurinhas trocar.",
        actionImageTitle: "Gerar Imagem",
        actionImageDesc: "Crie um resumo visual do seu progresso pronto para salvar.",
        btnResetHeader: "Iniciar Álbum em Branco",
        shareTradeImageTitle: "Imagem de Resumo da Troca",
        shareTradeImageInstruction: "Aqui está a imagem com o resumo da troca. Clique com o botão direito ou pressione e segure no celular para salvar ou copiar:",
        btnCompareImage: "Gerar Imagem de Troca",
        albumTypeLabel: "Leitura Local",
        incomingCompareTitle: "Comparar Álbum Recebido",
        incomingCompareInstruction: "Você entrou no site com um código de álbum compartilhado que difere do seu progresso local. Compare os dados e escolha qual manter:",
        incomingCompareLabelLocal: "Você (Local)",
        incomingCompareLabelIncoming: "Recebido",
        btnIncomingOverwrite: "Sobrescrever com o Recebido",
        btnIncomingKeep: "Manter meu Álbum Local",
        toastIncomingOverwriteSuccess: "Álbum sobrescrito com sucesso!",
        toastIncomingKeepSuccess: "Álbum local mantido e álbum recebido descartado.",
        yourCollectionLabel: "Sua Coleção",
        userLabel: "Você"
    },
    it: {
        title: "Fifa World Cup 2026",
        subtitle: "TRACKER DI FIGURINE",
        btnShare: "Copia Codice di Condivisione",
        btnCompare: "Scambia",
        albumProgress: "Progresso dell'Album",
        statOwnedLabel: "Ce l'ho (Uniche)",
        statMissingLabel: "Mancanti",
        statDuplicatesLabel: "Doppie",
        searchPlaceholder: "Cerca squadra...",
        filterAll: "Tutte",
        filterMissing: "Mancanti",
        filterDuplicates: "Doppie",
        tabAll: "Tutti i Gruppi",
        tabAd: "Gruppi A - D",
        tabEh: "Gruppi E - H",
        tabIl: "Gruppi I - L",
        tabFwc: "Speciale (FWC)",
        btnExportImport: "Backup / Importa",
        btnReset: "Reinizializza Album",
        footerText: "Progettato con tecnologia statica. Eseguito interamente nel tuo browser.",
        footerAuthor: "Creato da",
        instructionsTitle: "Come funziona il Tracker?",
        step1Title: "Marcatura delle figurine",
        step1Desc: "Fai clic sul numero di qualsiasi figurina per cambiarne lo stato: Manca (grigio), Ce l'ho (verde 🟢) o Doppia (blu 🔵). Fai clic di nuovo per tornare a Manca.",
        step2Title: "Salvataggio automatico",
        step2Desc: "I tuoi dati vengono salvati istantaneamente nel tuo browser (Local Storage) e non sporcano l'URL. Puoi chiudere o ricaricare la pagina senza perdere nulla.",
        step3Title: "Scambio intelligente",
        step3Desc: "Copia il codice dei tuoi progressi usando il pulsante 'Copia Codice'. Clicca sul pulsante 'Scambia' e incolla il codice del tuo amico per vedere quali figurine potete scambiarvi.",
        compareTitle: "Scambia con gli Amici",
        compareInstruction: "Incolla qui il codice del tracker del tuo amico per calcolare automaticamente quali figurine potete scambiarvi:",
        friendLinkPlaceholder: "Codice del tracker del tuo amico...",
        btnDoCompareText: "Confronta",
        friendGivesTitle: "Il tuo amico ti dà",
        friendGivesSubtitle: "Figurine che il tuo amico ha doppie (Stato 2) e a te mancano (Stato 0):",
        userGivesTitle: "Tu dai al tuo amico",
        userGivesSubtitle: "Figurine che tu hai doppie (Stato 2) e al tuo amico mancano (Stato 0):",
        compareNoMatches: "Nessuna figurina corrisponde in questo caso.",
        compareInvalidLink: "Il link o il codice dell'amico non è valido.",
        exportImportTitle: "Backup e Importa Dati",
        tabExport: "Esporta",
        tabImport: "Importa",
        exportInstruction: "Copia questo codice di backup e conservalo in un luogo sicuro. Contiene tutti i tuoi progressi attuali:",
        btnCopyBackupText: "Copia Codice di Backup",
        importInstruction: "Incolla qui il tuo codice di backup JSON o un codice hash completo. Questo sovrascriverà il tuo stato attuale:",
        importPlaceholder: "Incolla il codice JSON o il codice hash qui...",
        importErrorMsgText: "Il codice fornito non è valido.",
        btnDoImportText: "Ripristina Dati",
        resetTitle: "Reinizializzare l'Album?",
        resetWarning1: "Questa azione cancellerà tutti i tuoi progressi attuali e segnerà tutte le figurine come mancanti.",
        resetWarning2: "Questa azione non può essere annullata.",
        btnCancelResetText: "Annulla",
        btnConfirmResetText: "Sì, cancella tutto",
        toastCopyShare: "Codice di condivisione copiato negli appunti!",
        toastCopyBackup: "Codice di backup copiato!",
        toastImportSuccess: "Dati importati con successo!",
        toastResetSuccess: "Il progresso dell'album è stato reinizializzato.",
        noResultsText: "Nessuna squadra corrispondente trovata.",
        toastThemeChanged: "Tema cambiato!",
        toastCopyShareError: "Impossibile copiare il codice negli appunti.",
        usernameLabel: "Album di:",
        usernamePlaceholder: "Nome...",
        lastUpdateLabel: "Aggiornato:",
        friendGivesTitleWithName: "{name} ti dà",
        userGivesTitleWithName: "Tu dai a {name}",
        friendLastUpdated: "Ultimo aggiornamento di {name}: {date}",
        btnShareImage: "Genera Immagine",
        shareImageTitle: "Riepilogo da Condividere",
        shareImageInstruction: "Ecco un'immagine con il riepilogo del tuo album. Fai clic con il pulsante destro o tieni premuto sul cellulare per salvare o copiare:",
        btnDownloadCanvas: "Scarica Immagine",
        btnCopyCanvas: "Copia negli Appunti",
        toastCopyImageSuccess: "Immagine copiata negli appunti!",
        toastCopyImageError: "Impossibile copiare l'immagine automaticamente. Per favore scaricala.",
        shareImageTooManyMissing: "Troppe figurine mancanti. Condividi l'album per vedere l'elenco completo!",
        shareImageNoDuplicates: "Nessuna figurina doppia.",
        shareImageNoMissing: "Album completato! Nessuna figurina mancante.",
        localSecurityNotice: "Nota: A causa delle restrizioni di sicurezza dei file locali in questo browser, il download e la copia automatica potrebbero essere limitati. Tieni premuta l'immagine per salvarla.",
        toastIOSDownloadHint: "Su iPhone: tieni premuta l'immagine per salvarla nelle Foto 📷",
        actionShareTitle: "Copia Codice",
        actionShareDesc: "Copia il codice dei tuoi progressi da condividere con gli amici.",
        actionCompareTitle: "Scambia",
        actionCompareDesc: "Incolla il codice di un amico per vedere quali figurine scambiare.",
        actionImageTitle: "Genera Immagine",
        actionImageDesc: "Crea un riepilogo visivo dei tuoi progressi pronto da salvare.",
        btnResetHeader: "Inizia Album Vuoto",
        shareTradeImageTitle: "Immagine di Riepilogo dello Scambio",
        shareTradeImageInstruction: "Ecco l'immagine con il riepilogo dello scambio. Fai clic con il pulsante destro o tieni premuto sul cellulare per salvare o copiare:",
        btnCompareImage: "Genera Immagine di Scambio",
        albumTypeLabel: "Lettura Locale",
        incomingCompareTitle: "Confronta Album Ricevuto",
        incomingCompareInstruction: "Sei entrato nel sito con un codice album condiviso che differisce dai tuoi progressi locali. Confronta i dati e scegli quale conservare:",
        incomingCompareLabelLocal: "Tu (Locale)",
        incomingCompareLabelIncoming: "Ricevuto",
        btnIncomingOverwrite: "Sovrascrivi con Ricevuto",
        btnIncomingKeep: "Mantieni il Mio Album Locale",
        toastIncomingOverwriteSuccess: "Album sovrascritto con successo!",
        toastIncomingKeepSuccess: "Album locale mantenuto e album ricevuto scartato.",
        yourCollectionLabel: "Tua Colezione",
        userLabel: "Tu"
    }
};pareDesc: "Incolla il link di un amico per vedere quali figurine scambiare.",
        actionImageTitle: "Genera Immagine",
        actionImageDesc: "Crea un riepilogo visivo dei tuoi progressi pronto da salvare.",
        btnResetHeader: "Inizia Album Vuoto",
        shareTradeImageTitle: "Immagine di Riepilogo dello Scambio",
        shareTradeImageInstruction: "Ecco l'immagine con il riepilogo dello scambio. Fai clic con il pulsante destro o tieni premuto sul cellulare per salvare o copiare:",
        btnCompareImage: "Genera Immagine di Scambio"
    }
};

const COLS = 20;
const TOTAL_ITEMS = teams.length * COLS;
const b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

let state = new Array(TOTAL_ITEMS).fill(0);
let activeTab = 'tab-all';
let activeFilter = 'all';
let searchQuery = '';
let activeLang = 'es';

const matrixContainer = document.getElementById('matrix-container');
const progressText = document.getElementById('progress-text');
const progressBarInner = document.getElementById('progress-bar-inner');
const albumProgressBar = document.getElementById('album-progressbar');
const statOwned = document.getElementById('stat-owned');
const statMissing = document.getElementById('stat-missing');
const statDuplicates = document.getElementById('stat-duplicates');
const searchInput = document.getElementById('search-input');
const btnClearSearch = document.getElementById('btn-clear-search');
const filterAllBtn = document.getElementById('filter-all');
const filterMissingBtn = document.getElementById('filter-missing');
const filterDuplicatesBtn = document.getElementById('filter-duplicates');
const groupTabs = document.querySelectorAll('.group-tab');
const dlgCompare = document.getElementById('dlg-compare');
const dlgExportImport = document.getElementById('dlg-export-import');
const dlgConfirmReset = document.getElementById('dlg-confirm-reset');
const btnCompare = document.getElementById('btn-compare');
const btnExportImport = document.getElementById('btn-export-import');
const btnReset = document.getElementById('btn-reset');
const btnShare = document.getElementById('btn-share');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const selectLang = document.getElementById('select-lang');
const btnCloseCompare = document.getElementById('btn-close-compare');
const btnCloseExport = document.getElementById('btn-close-export');
const btnCloseResetDlg = document.getElementById('btn-close-reset-dlg');
const btnCancelReset = document.getElementById('btn-cancel-reset');
const btnDoCompare = document.getElementById('btn-do-compare');
const friendLinkInput = document.getElementById('friend-link-input');
const compareResults = document.getElementById('compare-results');
const listFriendsDuplicates = document.getElementById('list-friends-duplicates');
const listUserDuplicates = document.getElementById('list-user-duplicates');
const countFriendsDuplicates = document.getElementById('count-friends-duplicates');
const countUserDuplicates = document.getElementById('count-user-duplicates');
const btnTabExport = document.getElementById('btn-tab-export');
const btnTabImport = document.getElementById('btn-tab-import');
const exportPane = document.getElementById('export-pane');
const importPane = document.getElementById('import-pane');
const exportTextarea = document.getElementById('export-textarea');
const importTextarea = document.getElementById('import-textarea');
const importErrorMsg = document.getElementById('import-error-msg');
const btnCopyBackup = document.getElementById('btn-copy-backup');
const btnDoImport = document.getElementById('btn-do-import');
const btnConfirmReset = document.getElementById('btn-confirm-reset');
const toast = document.getElementById('toast');
const usernameInput = document.getElementById('username-input');
const lastUpdateValue = document.getElementById('last-update-value');
const compareFriendMeta = document.getElementById('compare-friend-meta');
const btnShareImage = document.getElementById('btn-share-image-dashboard');
const btnShowImageGenerator = document.getElementById('btn-show-image-generator');
const dlgShareImage = document.getElementById('dlg-share-image');
const btnCloseShareImage = document.getElementById('btn-close-share-image');
const btnDownloadCanvas = document.getElementById('btn-download-canvas');
const btnCopyCanvas = document.getElementById('btn-copy-canvas');
const shareCanvas = document.getElementById('share-canvas');
const shareCanvasPreview = document.getElementById('share-canvas-preview');
const btnHeaderReset = document.getElementById('btn-header-reset');
const btnCompareImage = document.getElementById('btn-compare-image');
const dlgShareTradeImage = document.getElementById('dlg-share-trade-image');
const btnCloseShareTradeImage = document.getElementById('btn-close-share-trade-image');
const shareTradeCanvas = document.getElementById('share-trade-canvas');
const shareTradeCanvasPreview = document.getElementById('share-trade-canvas-preview');

const dlgIncomingCompare = document.getElementById('dlg-incoming-compare');
const btnCloseIncomingCompare = document.getElementById('btn-close-incoming-compare');
const btnIncomingOverwrite = document.getElementById('btn-incoming-overwrite');
const btnIncomingKeep = document.getElementById('btn-incoming-keep');

let username = '';
let lastUpdate = 0;
let pendingIncomingState = null;
let pendingIncomingTimestamp = 0;
let shareCanvasFinal = null; // cropped canvas for download/copy
let shareTradeCanvasFinal = null;
let comparedFriendState = null;
let comparedFriendName = '';
let comparedFriendTimestamp = 0;

function init() {
    setupTheme();
    setupLanguage();
    loadState();
    renderMatrix();
    applyLanguage();
    applyFilters();
    updateDashboard();
    renderProfile();
    setupEventListeners();
}

function setupTheme() {
    const savedTheme = localStorage.getItem("color-scheme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(systemPrefersDark ? 'dark' : 'light');
    }
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', e => {
        if (!localStorage.getItem("color-scheme")) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    document.querySelector('meta[name="color-scheme"]').content = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("color-scheme", theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showToast(translations[activeLang].toastThemeChanged);
}

function setupLanguage() {
    const savedLang = localStorage.getItem('sticker-tracker-lang');
    if (savedLang && ['es', 'en', 'pt', 'it'].includes(savedLang)) {
        activeLang = savedLang;
    } else {
        const browserLang = navigator.language.slice(0, 2);
        if (['es', 'en', 'pt', 'it'].includes(browserLang)) {
            activeLang = browserLang;
        }
    }
    selectLang.value = activeLang;
}

function applyLanguage() {
    document.documentElement.lang = activeLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[activeLang][key]) {
            el.textContent = translations[activeLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[activeLang][key]) {
            el.setAttribute('placeholder', translations[activeLang][key]);
        }
    });
    document.querySelectorAll('.group-section').forEach(section => {
        const gName = section.getAttribute('data-group-name');
        const titleEl = section.querySelector('h3');
        if (titleEl) {
            if (gName === 'Especial') {
                titleEl.textContent = activeLang === 'en' ? 'Special / FWC' : (activeLang === 'pt' ? 'Especiais / FWC' : (activeLang === 'it' ? 'Speciale / FWC' : 'Especiales / FWC'));
            } else {
                const prefix = activeLang === 'en' ? 'Group' : (activeLang === 'it' ? 'Gruppo' : 'Grupo');
                const suffix = gName.replace('Grupo ', '');
                titleEl.textContent = `${prefix} ${suffix}`;
            }
        }
    });
    document.querySelectorAll('.team-card').forEach(card => {
        const teamId = parseInt(card.getAttribute('data-team-id'), 10);
        const team = teams.find(t => t.originalIndex === teamId);
        if (team) {
            const nameEl = card.querySelector('.team-name');
            if (nameEl) nameEl.textContent = team.names[activeLang];
            
            const groupBadge = card.querySelector('.team-group-badge');
            if (groupBadge) {
                const prefix = activeLang === 'en' ? 'Group' : (activeLang === 'it' ? 'Gruppo' : 'Grupo');
                const suffix = team.group.replace('Grupo ', '');
                groupBadge.textContent = `${prefix} ${suffix}`;
            }
            card.setAttribute('data-team-name-lower', team.names[activeLang].toLowerCase());
        }
    });
}

function compressState(stateArray) {
    const bytes = new Uint8Array(196);
    for (let i = 0; i < 196; i++) {
        const d0 = stateArray[i * 5];
        const d1 = stateArray[i * 5 + 1];
        const d2 = stateArray[i * 5 + 2];
        const d3 = stateArray[i * 5 + 3];
        const d4 = stateArray[i * 5 + 4];
        bytes[i] = d0 + d1 * 3 + d2 * 9 + d3 * 27 + d4 * 81;
    }
    let result = "";
    const len = bytes.length;
    for (let i = 0; i < len; i += 3) {
        const b1 = bytes[i];
        const b2 = i + 1 < len ? bytes[i + 1] : 0;
        const b3 = i + 2 < len ? bytes[i + 2] : 0;
        const c1 = b1 >> 2;
        const c2 = ((b1 & 3) << 4) | (b2 >> 4);
        const c3 = ((b2 & 15) << 2) | (b3 >> 6);
        const c4 = b3 & 63;
        result += b64chars[c1] + b64chars[c2];
        if (i + 1 < len) result += b64chars[c3];
        if (i + 2 < len) result += b64chars[c4];
    }
    return result;
}

function decompressState(str) {
    const bytes = [];
    const lookup = {};
    for (let i = 0; i < 64; i++) {
        lookup[b64chars[i]] = i;
    }
    let buffer = 0;
    let bitsCollected = 0;
    for (let i = 0; i < str.length; i++) {
        const val = lookup[str[i]];
        if (val === undefined) continue;
        buffer = (buffer << 6) | val;
        bitsCollected += 6;
        if (bitsCollected >= 8) {
            bitsCollected -= 8;
            bytes.push((buffer >> bitsCollected) & 255);
        }
    }
    const stateArray = new Array(TOTAL_ITEMS).fill(0);
    for (let i = 0; i < 196; i++) {
        let val = bytes[i] !== undefined ? bytes[i] : 0;
        stateArray[i * 5] = val % 3;
        val = Math.floor(val / 3);
        stateArray[i * 5 + 1] = val % 3;
        val = Math.floor(val / 3);
        stateArray[i * 5 + 2] = val % 3;
        val = Math.floor(val / 3);
        stateArray[i * 5 + 3] = val % 3;
        val = Math.floor(val / 3);
        stateArray[i * 5 + 4] = val % 3;
    }
    return stateArray;
}

function calculateStats(stateArray) {
    let ownedUnique = 0;
    let missing = 0;
    let duplicates = 0;
    for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (stateArray[i] === 0) missing++;
        else if (stateArray[i] === 1) ownedUnique++;
        else if (stateArray[i] === 2) {
            ownedUnique++;
            duplicates++;
        }
    }
    const percent = TOTAL_ITEMS > 0 ? ((ownedUnique / TOTAL_ITEMS) * 100).toFixed(1) : "0.0";
    return {
        percent: percent + "%",
        owned: ownedUnique,
        duplicates: duplicates
    };
}

function showIncomingCompareDialog(localStateArray, incomingStateArray) {
    const localStats = calculateStats(localStateArray);
    const incomingStats = calculateStats(incomingStateArray);
    
    const incLocalPct = document.getElementById('inc-local-pct');
    const incIncomingPct = document.getElementById('inc-incoming-pct');
    const incLocalOwned = document.getElementById('inc-local-owned');
    const incIncomingOwned = document.getElementById('inc-incoming-owned');
    const incLocalDuplicates = document.getElementById('inc-local-duplicates');
    const incIncomingDuplicates = document.getElementById('inc-incoming-duplicates');
    
    if (incLocalPct) incLocalPct.textContent = localStats.percent;
    if (incIncomingPct) incIncomingPct.textContent = incomingStats.percent;
    if (incLocalOwned) incLocalOwned.textContent = localStats.owned;
    if (incIncomingOwned) incIncomingOwned.textContent = incomingStats.owned;
    if (incLocalDuplicates) incLocalDuplicates.textContent = localStats.duplicates;
    if (incIncomingDuplicates) incIncomingDuplicates.textContent = incomingStats.duplicates;
    
    if (dlgIncomingCompare) {
        dlgIncomingCompare.showModal();
    }
}

function loadState() {
    const hash = window.location.hash.substring(1);
    const parts = hash.split(/[?&]/);
    const stateHash = parts[0];
    
    const hasUrlHash = (stateHash.length === 262 && /^[A-Za-z0-9\-_]{262}$/.test(stateHash));
    
    const savedState = localStorage.getItem('sticker-tracker-state');
    const hasLocalState = (savedState && savedState.length === 262 && /^[A-Za-z0-9\-_]{262}$/.test(savedState));
    
    if (hasUrlHash) {
        const incomingState = decompressState(stateHash);
        let incomingTimestamp = Date.now();
        if (parts.length > 1) {
            const qIndex = hash.indexOf('?');
            const qStr = qIndex !== -1 ? hash.substring(qIndex + 1) : hash.substring(stateHash.length + 1);
            const queryParams = new URLSearchParams(qStr);
            const tVal = queryParams.get('t');
            if (tVal) {
                const parsedT = parseInt(tVal, 10);
                if (!isNaN(parsedT) && parsedT > 0) {
                    incomingTimestamp = parsedT;
                }
            }
        }
        
        if (!hasLocalState || savedState === stateHash) {
            state = incomingState;
            lastUpdate = incomingTimestamp;
            saveStateToLocalStorage();
            history.replaceState(null, null, ' ');
        } else {
            pendingIncomingState = incomingState;
            pendingIncomingTimestamp = incomingTimestamp;
            
            state = decompressState(savedState);
            const savedUpdate = localStorage.getItem('sticker-tracker-last-update');
            lastUpdate = savedUpdate ? parseInt(savedUpdate, 10) || 0 : 0;
            
            showIncomingCompareDialog(state, incomingState);
            history.replaceState(null, null, ' ');
        }
    } else {
        if (hasLocalState) {
            state = decompressState(savedState);
            const savedUpdate = localStorage.getItem('sticker-tracker-last-update');
            lastUpdate = savedUpdate ? parseInt(savedUpdate, 10) || 0 : 0;
        } else {
            state = new Array(TOTAL_ITEMS).fill(0);
            lastUpdate = Date.now();
            saveStateToLocalStorage();
        }
    }
}

function initializeEmptyState() {
    state = new Array(TOTAL_ITEMS).fill(0);
    lastUpdate = Date.now();
    saveState();
}

function saveState() {
    lastUpdate = Date.now();
    updateLastUpdateDisplay();
    saveStateToLocalStorage();
}

function saveStateToLocalStorage() {
    localStorage.setItem('sticker-tracker-state', compressState(state));
    localStorage.setItem('sticker-tracker-last-update', lastUpdate);
}

function renderProfile() {
    updateLastUpdateDisplay();
}

function updateLastUpdateDisplay() {
    if (!lastUpdateValue) return;
    if (lastUpdate > 0) {
        const locale = activeLang === 'es' ? 'es-ES' : (activeLang === 'pt' ? 'pt-PT' : (activeLang === 'it' ? 'it-IT' : 'en-US'));
        const formatter = new Intl.DateTimeFormat(locale, {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
        lastUpdateValue.textContent = formatter.format(new Date(lastUpdate));
    } else {
        lastUpdateValue.textContent = '-';
    }
}

function getGroupsForActiveTab() {
    switch (activeTab) {
        case 'tab-ad':
            return ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D'];
        case 'tab-eh':
            return ['Grupo E', 'Grupo F', 'Grupo G', 'Grupo H'];
        case 'tab-il':
            return ['Grupo I', 'Grupo J', 'Grupo K', 'Grupo L'];
        case 'tab-fwc':
            return ['Especial'];
        case 'tab-all':
        default:
            return ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D', 'Grupo E', 'Grupo F', 'Grupo G', 'Grupo H', 'Grupo I', 'Grupo J', 'Grupo K', 'Grupo L', 'Especial'];
    }
}

function renderMatrix() {
    matrixContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const groupNames = ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D', 'Grupo E', 'Grupo F', 'Grupo G', 'Grupo H', 'Grupo I', 'Grupo J', 'Grupo K', 'Grupo L', 'Especial'];
    
    groupNames.forEach(groupName => {
        const groupTeams = teams.filter(t => t.group === groupName);
        if (groupTeams.length === 0) return;

        const groupSection = document.createElement('div');
        groupSection.className = 'group-section';
        groupSection.setAttribute('data-group-name', groupName);
        groupSection.style.marginBottom = '24px';

        const groupTitle = document.createElement('h3');
        groupSection.appendChild(groupTitle);

        const groupGrid = document.createElement('div');
        groupGrid.className = 'matrix-grid';

        groupTeams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.className = 'team-card';
            teamCard.setAttribute('data-team-id', team.originalIndex);
            teamCard.setAttribute('data-team-group', team.group);

            const teamRow = document.createElement('div');
            teamRow.className = 'team-row';

            const teamHeader = document.createElement('div');
            teamHeader.className = 'team-header';

            const teamIdentity = document.createElement('div');
            teamIdentity.className = 'team-identity';

            const teamFlag = document.createElement('span');
            teamFlag.className = 'team-flag';
            teamFlag.textContent = team.emoji;
            teamIdentity.appendChild(teamFlag);

            const teamName = document.createElement('span');
            teamName.className = 'team-name';
            teamIdentity.appendChild(teamName);

            const teamGroupBadge = document.createElement('span');
            teamGroupBadge.className = 'team-group-badge';
            teamIdentity.appendChild(teamGroupBadge);

            teamHeader.appendChild(teamIdentity);

            const teamProgressArea = document.createElement('div');
            teamProgressArea.className = 'team-progress-area';

            const teamMiniBar = document.createElement('div');
            teamMiniBar.className = 'team-progress-mini-bar';
            
            const teamMiniFill = document.createElement('div');
            teamMiniFill.className = 'team-progress-mini-fill';
            teamMiniFill.id = `team-mini-fill-${team.originalIndex}`;
            teamMiniBar.appendChild(teamMiniFill);
            teamProgressArea.appendChild(teamMiniBar);

            const teamProgressText = document.createElement('span');
            teamProgressText.className = 'team-progress-text';
            teamProgressText.id = `team-progress-text-${team.originalIndex}`;
            teamProgressText.textContent = '0/20';
            teamProgressArea.appendChild(teamProgressText);

            teamHeader.appendChild(teamProgressArea);
            teamRow.appendChild(teamHeader);

            const stickersContainer = document.createElement('div');
            stickersContainer.className = 'stickers-container';

            let teamOwnedCount = 0;
            for (let col = 0; col < COLS; col++) {
                const index = (team.originalIndex * COLS) + col;
                const stickerNum = col + 1;
                const stickerState = state[index];

                if (stickerState > 0) teamOwnedCount++;

                const stickerEl = document.createElement('div');
                stickerEl.className = `sticker state-${stickerState}`;
                stickerEl.textContent = stickerNum;
                stickerEl.setAttribute('data-index', index);
                stickerEl.id = `sticker-${index}`;
                stickerEl.addEventListener('click', () => handleStickerClick(index, stickerEl, team.originalIndex));
                stickersContainer.appendChild(stickerEl);
            }

            const percent = (teamOwnedCount / COLS) * 100;
            teamMiniFill.style.width = `${percent}%`;
            teamProgressText.textContent = `${teamOwnedCount}/${COLS}`;

            teamRow.appendChild(stickersContainer);
            teamCard.appendChild(teamRow);
            groupGrid.appendChild(teamCard);
        });

        groupSection.appendChild(groupGrid);
        fragment.appendChild(groupSection);
    });

    matrixContainer.appendChild(fragment);
}

function applyFilters() {
    const query = searchQuery.toLowerCase().trim();
    const activeGroups = getGroupsForActiveTab();
    const groupSections = matrixContainer.querySelectorAll('.group-section');
    let totalVisible = 0;

    groupSections.forEach(section => {
        const groupName = section.getAttribute('data-group-name');
        const teamCards = section.querySelectorAll('.team-card');
        let sectionVisibleTeams = 0;

        teamCards.forEach(card => {
            const teamGroup = card.getAttribute('data-team-group');
            const teamNameLower = card.getAttribute('data-team-name-lower');
            const matchesTab = activeGroups.includes(teamGroup);
            const matchesSearch = !query || teamNameLower.includes(query) || teamGroup.toLowerCase().includes(query);

            if (matchesTab && matchesSearch) {
                card.style.display = 'block';
                sectionVisibleTeams++;
                totalVisible++;
                
                const teamId = parseInt(card.getAttribute('data-team-id'), 10);
                for (let col = 0; col < COLS; col++) {
                    const idx = (teamId * COLS) + col;
                    const stickerEl = document.getElementById(`sticker-${idx}`);
                    if (stickerEl) {
                        const sState = state[idx];
                        let hideSticker = false;
                        if (activeFilter === 'missing' && sState !== 0) hideSticker = true;
                        if (activeFilter === 'duplicates' && sState !== 2) hideSticker = true;
                        stickerEl.style.opacity = hideSticker ? '0.15' : '1';
                    }
                }
            } else {
                card.style.display = 'none';
            }
        });

        if (sectionVisibleTeams > 0) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    const existingMsg = matrixContainer.querySelector('.list-empty-msg');
    if (existingMsg) existingMsg.remove();

    if (totalVisible === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'list-empty-msg';
        noResults.style.padding = '40px';
        noResults.style.fontSize = '16px';
        noResults.textContent = translations[activeLang].noResultsText;
        matrixContainer.appendChild(noResults);
    }
}

function handleStickerClick(index, element, teamIndex) {
    state[index] = (state[index] + 1) % 3;
    element.className = `sticker state-${state[index]}`;
    
    let hideSticker = false;
    if (activeFilter === 'missing' && state[index] !== 0) hideSticker = true;
    if (activeFilter === 'duplicates' && state[index] !== 2) hideSticker = true;
    element.style.opacity = hideSticker ? '0.15' : '1';

    saveState();
    updateTeamProgress(teamIndex);
    updateDashboard();
}

function updateTeamProgress(teamIndex) {
    let teamOwnedCount = 0;
    for (let col = 0; col < COLS; col++) {
        const index = (teamIndex * COLS) + col;
        if (state[index] > 0) teamOwnedCount++;
    }
    const teamMiniFill = document.getElementById(`team-mini-fill-${teamIndex}`);
    const teamProgressText = document.getElementById(`team-progress-text-${teamIndex}`);
    if (teamMiniFill && teamProgressText) {
        const percent = (teamOwnedCount / COLS) * 100;
        teamMiniFill.style.width = `${percent}%`;
        teamProgressText.textContent = `${teamOwnedCount}/${COLS}`;
    }
}

function updateDashboard() {
    let ownedUnique = 0;
    let missing = 0;
    let duplicates = 0;
    for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (state[i] === 0) missing++;
        else if (state[i] === 1) ownedUnique++;
        else if (state[i] === 2) {
            ownedUnique++;
            duplicates++;
        }
    }
    statOwned.textContent = ownedUnique;
    statMissing.textContent = missing;
    statDuplicates.textContent = duplicates;
    const percent = ((ownedUnique / TOTAL_ITEMS) * 100).toFixed(1);
    progressText.textContent = `${percent}% (${ownedUnique} / ${TOTAL_ITEMS})`;
    progressBarInner.style.width = `${percent}%`;
    albumProgressBar.setAttribute('aria-valuenow', percent);
}

function setupEventListeners() {
    window.addEventListener('hashchange', () => {
        loadState();
        for (let teamIndex = 0; teamIndex < teams.length; teamIndex++) {
            updateTeamProgress(teamIndex);
            for (let col = 0; col < COLS; col++) {
                const idx = (teamIndex * COLS) + col;
                const stickerEl = document.getElementById(`sticker-${idx}`);
                if (stickerEl) {
                    stickerEl.className = `sticker state-${state[idx]}`;
                }
            }
        }
        applyFilters();
        updateDashboard();
        renderProfile();
    });

    btnThemeToggle.addEventListener('click', toggleTheme);

    selectLang.addEventListener('change', (e) => {
        activeLang = e.target.value;
        localStorage.setItem('sticker-tracker-lang', activeLang);
        applyLanguage();
        applyFilters();
        updateLastUpdateDisplay();
    });

    groupTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            groupTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            activeTab = tab.id;
            applyFilters();
        });
    });

    filterAllBtn.addEventListener('click', () => {
        setActiveFilter('all', filterAllBtn);
    });
    filterMissingBtn.addEventListener('click', () => {
        setActiveFilter('missing', filterMissingBtn);
    });
    filterDuplicatesBtn.addEventListener('click', () => {
        setActiveFilter('duplicates', filterDuplicatesBtn);
    });

    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        btnClearSearch.style.display = searchQuery.length > 0 ? 'block' : 'none';
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            applyFilters();
        }, 120);
    });

    btnClearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        btnClearSearch.style.display = 'none';
        applyFilters();
        searchInput.focus();
    });

    btnShare.addEventListener('click', copyShareURL);

    btnCompare.addEventListener('click', () => {
        friendLinkInput.value = '';
        compareResults.style.display = 'none';
        compareFriendMeta.style.display = 'none';
        
        const friendGivesSpan = document.querySelector('[data-i18n="friendGivesTitle"]');
        const userGivesSpan = document.querySelector('[data-i18n="userGivesTitle"]');
        if (friendGivesSpan) friendGivesSpan.textContent = translations[activeLang].friendGivesTitle;
        if (userGivesSpan) userGivesSpan.textContent = translations[activeLang].userGivesTitle;

        dlgCompare.showModal();
    });
    btnCloseCompare.addEventListener('click', () => dlgCompare.close());
    btnDoCompare.addEventListener('click', compareStates);

    btnExportImport.addEventListener('click', () => {
        exportTextarea.value = JSON.stringify({
            version: '2026-v1',
            timestamp: Date.now(),
            state: compressState(state)
        }, null, 2);
        importTextarea.value = '';
        importErrorMsg.style.display = 'none';
        showExportPane();
        dlgExportImport.showModal();
    });
    btnCloseExport.addEventListener('click', () => dlgExportImport.close());
    btnTabExport.addEventListener('click', showExportPane);
    btnTabImport.addEventListener('click', showImportPane);
    btnCopyBackup.addEventListener('click', copyBackupText);
    btnDoImport.addEventListener('click', importBackupData);

    btnReset.addEventListener('click', () => dlgConfirmReset.showModal());
    btnCloseResetDlg.addEventListener('click', () => dlgConfirmReset.close());
    btnCancelReset.addEventListener('click', () => dlgConfirmReset.close());
    btnConfirmReset.addEventListener('click', resetAlbum);

    [dlgCompare, dlgExportImport, dlgConfirmReset, dlgIncomingCompare].forEach(dialog => {
        if (dialog) {
            dialog.addEventListener('click', (e) => {
                const rect = dialog.getBoundingClientRect();
                if (e.clientX < rect.left || e.clientX > rect.right ||
                    e.clientY < rect.top || e.clientY > rect.bottom) {
                    dialog.close();
                }
            });
        }
    });

    if (dlgIncomingCompare) {
        dlgIncomingCompare.addEventListener('close', () => {
            pendingIncomingState = null;
            pendingIncomingTimestamp = 0;
        });
    }

    if (btnIncomingOverwrite) {
        btnIncomingOverwrite.addEventListener('click', () => {
            if (pendingIncomingState) {
                state = pendingIncomingState;
                lastUpdate = pendingIncomingTimestamp;
                saveStateToLocalStorage();
                
                // Re-render whole UI with the loaded state
                for (let teamIndex = 0; teamIndex < teams.length; teamIndex++) {
                    updateTeamProgress(teamIndex);
                    for (let col = 0; col < COLS; col++) {
                        const idx = (teamIndex * COLS) + col;
                        const stickerEl = document.getElementById(`sticker-${idx}`);
                        if (stickerEl) {
                            stickerEl.className = `sticker state-${state[idx]}`;
                        }
                    }
                }
                applyFilters();
                updateDashboard();
                updateLastUpdateDisplay();
                
                showToast(translations[activeLang].toastIncomingOverwriteSuccess);
            }
            if (dlgIncomingCompare) dlgIncomingCompare.close();
        });
    }

    const closeIncomingCompare = () => {
        if (dlgIncomingCompare) dlgIncomingCompare.close();
        showToast(translations[activeLang].toastIncomingKeepSuccess);
    };
    if (btnIncomingKeep) {
        btnIncomingKeep.addEventListener('click', closeIncomingCompare);
    }
    if (btnCloseIncomingCompare) {
        btnCloseIncomingCompare.addEventListener('click', closeIncomingCompare);
    }

    if (btnShareImage) {
        btnShareImage.addEventListener('click', openShareImageModal);
    }
    if (btnShowImageGenerator) {
        btnShowImageGenerator.addEventListener('click', openShareImageModal);
    }
    if (btnCloseShareImage) {
        btnCloseShareImage.addEventListener('click', () => dlgShareImage.close());
    }
    if (btnDownloadCanvas) {
        btnDownloadCanvas.addEventListener('click', downloadShareImage);
    }
    if (btnCopyCanvas) {
        btnCopyCanvas.addEventListener('click', copyShareImageToClipboard);
    }

    if (dlgShareImage) {
        dlgShareImage.addEventListener('click', (e) => {
            const rect = dlgShareImage.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right ||
                e.clientY < rect.top || e.clientY > rect.bottom) {
                dlgShareImage.close();
            }
        });
    }

    const dynamicHeaderReset = document.getElementById('btn-header-reset');
    if (dynamicHeaderReset) {
        dynamicHeaderReset.addEventListener('click', (e) => {
            e.preventDefault();
            dlgConfirmReset.showModal();
        });
    }
    if (btnCompareImage) {
        btnCompareImage.addEventListener('click', openShareTradeImageModal);
    }
    if (btnCloseShareTradeImage) {
        btnCloseShareTradeImage.addEventListener('click', () => dlgShareTradeImage.close());
    }
    if (dlgShareTradeImage) {
        dlgShareTradeImage.addEventListener('click', (e) => {
            const rect = dlgShareTradeImage.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right ||
                e.clientY < rect.top || e.clientY > rect.bottom) {
                dlgShareTradeImage.close();
            }
        });
    }
}

function setActiveFilter(filter, button) {
    [filterAllBtn, filterMissingBtn, filterDuplicatesBtn].forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = filter;
    applyFilters();
}

function copyShareURL() {
    const shareCode = compressState(state);
    navigator.clipboard.writeText(shareCode).then(() => {
        showToast(translations[activeLang].toastCopyShare);
    }).catch(() => {
        showToast(translations[activeLang].toastCopyShareError);
    });
}

function copyBackupText() {
    exportTextarea.select();
    navigator.clipboard.writeText(exportTextarea.value).then(() => {
        showToast(translations[activeLang].toastCopyBackup);
    });
}

function showExportPane() {
    btnTabExport.classList.add('active');
    btnTabImport.classList.remove('active');
    exportPane.style.display = 'block';
    importPane.style.display = 'none';
}

function showImportPane() {
    btnTabExport.classList.remove('active');
    btnTabImport.classList.add('active');
    exportPane.style.display = 'none';
    importPane.style.display = 'block';
}

function importBackupData() {
    const input = importTextarea.value.trim();
    if (!input) return;
    let targetStateString = '';
    let importedTimestamp = 0;
    try {
        const parsed = JSON.parse(input);
        if (parsed && typeof parsed.state === 'string') {
            targetStateString = parsed.state;
        }
    } catch(e) {
        let hashCandidate = input;
        if (input.includes('#')) hashCandidate = input.split('#')[1];
        const parts = hashCandidate.split(/[?&]/);
        targetStateString = parts[0];
        if (parts.length > 1) {
            const qStr = hashCandidate.substring(targetStateString.length + 1);
            const queryParams = new URLSearchParams(qStr);
            const tVal = queryParams.get('t');
            if (tVal) {
                const parsedT = parseInt(tVal, 10);
                if (!isNaN(parsedT) && parsedT > 0) {
                    importedTimestamp = parsedT;
                }
            }
        }
    }
    if (targetStateString.length === 262 && /^[A-Za-z0-9\-_]{262}$/.test(targetStateString)) {
        state = decompressState(targetStateString);
        lastUpdate = importedTimestamp > 0 ? importedTimestamp : Date.now();
        saveStateToLocalStorage();
        updateLastUpdateDisplay();
        renderProfile();
        for (let i = 0; i < teams.length; i++) updateTeamProgress(i);
        for (let i = 0; i < TOTAL_ITEMS; i++) {
            const el = document.getElementById(`sticker-${i}`);
            if (el) el.className = `sticker state-${state[i]}`;
        }
        applyFilters();
        updateDashboard();
        dlgExportImport.close();
        showToast(translations[activeLang].toastImportSuccess);
    } else {
        importErrorMsg.style.display = 'block';
    }
}

function resetAlbum() {
    state = new Array(TOTAL_ITEMS).fill(0);
    lastUpdate = Date.now();
    updateLastUpdateDisplay();
    saveStateToLocalStorage();
    for (let i = 0; i < teams.length; i++) updateTeamProgress(i);
    for (let i = 0; i < TOTAL_ITEMS; i++) {
        const el = document.getElementById(`sticker-${i}`);
        if (el) el.className = `sticker state-0`;
    }
    applyFilters();
    updateDashboard();
    dlgConfirmReset.close();
    showToast(translations[activeLang].toastResetSuccess);
}

function compareStates() {
    const friendLink = friendLinkInput.value.trim();
    if (!friendLink) return;
    let friendName = '';
    let friendTimestamp = 0;
    
    let hashPart = friendLink;
    if (friendLink.includes('#')) hashPart = friendLink.split('#')[1];
    const parts = hashPart.split(/[?&]/);
    const friendStateHash = parts[0];
    
    if (friendStateHash.length !== 262 || !/^[A-Za-z0-9\-_]{262}$/.test(friendStateHash)) {
        showToast(translations[activeLang].compareInvalidLink);
        return;
    }
    
    if (parts.length > 1) {
        const qIndex = hashPart.indexOf('?');
        const qStr = qIndex !== -1 ? hashPart.substring(qIndex + 1) : hashPart.substring(friendStateHash.length + 1);
        const queryParams = new URLSearchParams(qStr);
        friendName = queryParams.get('u') || '';
        const tVal = queryParams.get('t');
        if (tVal) {
            const parsedT = parseInt(tVal, 10);
            if (!isNaN(parsedT) && parsedT > 0) {
                friendTimestamp = parsedT;
            }
        }
    }
    
    const friendState = decompressState(friendStateHash);
    comparedFriendState = friendState;
    comparedFriendName = friendName;
    comparedFriendTimestamp = friendTimestamp;
    const friendGivesList = [];
    const userGivesList = [];
    for (let i = 0; i < TOTAL_ITEMS; i++) {
        const teamIndex = Math.floor(i / COLS);
        const colIndex = i % COLS;
        const team = teams[teamIndex];
        const stickerLabel = `${team.emoji} ${team.names[activeLang]} #${colIndex + 1}`;
        if (friendState[i] === 2 && state[i] === 0) friendGivesList.push(stickerLabel);
        if (state[i] === 2 && friendState[i] === 0) userGivesList.push(stickerLabel);
    }
    
    const friendGivesSpan = document.querySelector('[data-i18n="friendGivesTitle"]');
    const userGivesSpan = document.querySelector('[data-i18n="userGivesTitle"]');
    
    if (friendName) {
        if (friendGivesSpan) friendGivesSpan.textContent = translations[activeLang].friendGivesTitleWithName.replace('{name}', friendName);
        if (userGivesSpan) userGivesSpan.textContent = translations[activeLang].userGivesTitleWithName.replace('{name}', friendName);
    } else {
        if (friendGivesSpan) friendGivesSpan.textContent = translations[activeLang].friendGivesTitle;
        if (userGivesSpan) userGivesSpan.textContent = translations[activeLang].userGivesTitle;
    }
    
    if (friendName || friendTimestamp > 0) {
        const locale = activeLang === 'es' ? 'es-ES' : (activeLang === 'pt' ? 'pt-PT' : (activeLang === 'it' ? 'it-IT' : 'en-US'));
        const formatter = new Intl.DateTimeFormat(locale, {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
        const fDate = friendTimestamp > 0 ? formatter.format(new Date(friendTimestamp)) : '-';
        const nameToUse = friendName || (activeLang === 'en' ? 'Friend' : (activeLang === 'pt' ? 'Amigo' : (activeLang === 'it' ? 'Amico' : 'Tu amigo')));
        compareFriendMeta.textContent = translations[activeLang].friendLastUpdated.replace('{name}', nameToUse).replace('{date}', fDate);
        compareFriendMeta.style.display = 'flex';
    } else {
        compareFriendMeta.style.display = 'none';
    }
    
    renderCompareList(listFriendsDuplicates, friendGivesList, countFriendsDuplicates);
    renderCompareList(listUserDuplicates, userGivesList, countUserDuplicates);
    compareResults.style.display = 'block';
}

function renderCompareList(container, list, countElement) {
    container.innerHTML = '';
    countElement.textContent = list.length;
    if (list.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'list-empty-msg';
        empty.textContent = translations[activeLang].compareNoMatches;
        container.appendChild(empty);
    } else {
        const listEl = document.createElement('ul');
        listEl.style.listStyle = 'none';
        listEl.style.padding = '0';
        list.forEach(item => {
            const itemEl = document.createElement('li');
            itemEl.textContent = item;
            itemEl.style.padding = '6px 8px';
            itemEl.style.borderBottom = '1px solid var(--border-card)';
            itemEl.style.display = 'flex';
            itemEl.style.alignItems = 'center';
            itemEl.style.gap = '8px';
            listEl.appendChild(itemEl);
        });
        container.appendChild(listEl);
    }
}

function drawRoundedRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
    }
    if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = text.split(' ').filter(w => w !== '');
    let line = '';
    let lineCount = 0;
    
    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line.trim(), x, y);
            line = words[n] + ' ';
            y += lineHeight;
            lineCount++;
            if (maxLines && lineCount >= maxLines - 1) {
                ctx.fillText(line.trim() + ' ...', x, y);
                return y;
            }
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line.trim(), x, y);
    return y;
}

// ─── STRUCTURED DATA FOR CANVAS ───────────────────────────────────────────────
function getGroupedStickersData(stateVal) {
    const groupOrder = [
        'Grupo A','Grupo B','Grupo C','Grupo D',
        'Grupo E','Grupo F','Grupo G','Grupo H',
        'Grupo I','Grupo J','Grupo K','Grupo L','Especial'
    ];
    const labelMap = {
        'Grupo A':'A','Grupo B':'B','Grupo C':'C','Grupo D':'D',
        'Grupo E':'E','Grupo F':'F','Grupo G':'G','Grupo H':'H',
        'Grupo I':'I','Grupo J':'J','Grupo K':'K','Grupo L':'L','Especial':'FWC'
    };
    const groupMap = {};
    groupOrder.forEach(g => { groupMap[g] = []; });

    for (let tIdx = 0; tIdx < teams.length; tIdx++) {
        const team = teams[tIdx];
        const stickers = [];
        for (let s = 0; s < 20; s++) {
            if (state[tIdx * 20 + s] === stateVal) stickers.push(s + 1);
        }
        if (stickers.length > 0) {
            const key = team.group || 'Especial';
            if (!groupMap[key]) groupMap[key] = [];
            groupMap[key].push({ emoji: team.emoji, code: team.code, stickers });
        }
    }
    return groupOrder
        .filter(g => groupMap[g] && groupMap[g].length > 0)
        .map(g => ({ label: labelMap[g] || g, teams: groupMap[g] }));
}

// ─── DRAW A STICKER SECTION (MISSING or DUPLICATES) ───────────────────────────
function drawGroupSection(ctx, y, stateVal, accentColor, title, noItemsText) {
    y += 30;
    // Accent bar + title
    ctx.fillStyle = accentColor;
    ctx.fillRect(60, y, 4, 28);
    ctx.font = 'bold 20px Outfit, sans-serif';
    ctx.fillStyle = accentColor;
    ctx.fillText(title, 78, y + 21);
    y += 46;

    // Thin separator
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();
    y += 16;

    const data = getGroupedStickersData(stateVal);

    if (data.length === 0) {
        ctx.fillStyle = '#718096';
        ctx.font = '500 16px Inter, sans-serif';
        ctx.fillText(noItemsText, 60, y + 18);
        return y + 52;
    }

    for (const group of data) {
        const isLong = group.label.length > 1; // 'FWC'
        const badgeW = isLong ? 46 : 30;
        const badgeH = 26;
        const rowBaseY = y;

        // Badge pill
        drawRoundedRect(ctx, 60, rowBaseY, badgeW, badgeH, 7,
            accentColor + '28', accentColor + '88');
        ctx.fillStyle = accentColor;
        ctx.font = 'bold 12px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(group.label, 60 + badgeW / 2, rowBaseY + 17);
        ctx.textAlign = 'left';

        // Team entries as flowing text
        const lineStr = group.teams
            .map(t => t.emoji + t.code + ':' + t.stickers.join(','))
            .join('   ');
        ctx.fillStyle = '#cbd5e0';
        ctx.font = '500 15px Inter, sans-serif';
        const textX = 60 + badgeW + 14;
        const textStartY = rowBaseY + 18;
        const endY = wrapText(ctx, lineStr, textX, textStartY, 950 - badgeW, 24, 0);

        y = Math.max(rowBaseY + 34, endY + 14);
    }
    return y + 8;
}

// ─── MODAL OPENER ─────────────────────────────────────────────────────────────
function openShareImageModal() {
    if (dlgShareImage) dlgShareImage.showModal();
    // Wait for custom fonts before drawing to avoid blank/mis-measured text
    document.fonts.ready.then(() => {
        try { generateShareImage(); }
        catch (err) { console.error('Error generating image:', err); }
    });
}

// ─── MAIN CANVAS GENERATOR ────────────────────────────────────────────────────
function generateShareImage() {
    if (!shareCanvas) return;
    shareCanvasFinal = null;

    const W = 1080;
    const MAX_H = 3200; // draw on a tall canvas, crop afterwards

    shareCanvas.width = W;
    shareCanvas.height = MAX_H;
    const ctx = shareCanvas.getContext('2d');

    // ── BACKGROUND ────────────────────────────────────────────────────────────
    const bgGrad = ctx.createLinearGradient(0, 0, 0, MAX_H);
    bgGrad.addColorStop(0, '#0d0b21');
    bgGrad.addColorStop(0.45, '#111030');
    bgGrad.addColorStop(1, '#0a0c18');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, MAX_H);

    // Ambient glows
    const g1 = ctx.createRadialGradient(160, 260, 20, 160, 260, 480);
    g1.addColorStop(0, 'rgba(88,86,214,0.18)'); g1.addColorStop(1, 'rgba(88,86,214,0)');
    ctx.fillStyle = g1; ctx.beginPath(); ctx.arc(160, 260, 480, 0, Math.PI*2); ctx.fill();

    const g2 = ctx.createRadialGradient(980, 500, 20, 980, 500, 520);
    g2.addColorStop(0, 'rgba(248,113,113,0.10)'); g2.addColorStop(1, 'rgba(248,113,113,0)');
    ctx.fillStyle = g2; ctx.beginPath(); ctx.arc(980, 500, 520, 0, Math.PI*2); ctx.fill();

    // Subtle rings
    ctx.strokeStyle = 'rgba(255,255,255,0.012)'; ctx.lineWidth = 1.5;
    for (let i = 0; i < 4; i++) {
        ctx.beginPath(); ctx.arc(W/2, 380, 220 + i*190, 0, Math.PI*2); ctx.stroke();
    }

    let y = 0;

    // ── HEADER ────────────────────────────────────────────────────────────────
    y += 88;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 46px Outfit, sans-serif';
    ctx.fillText('\u26BD FIFA World Cup 2026', 60, y);
    y += 36;
    ctx.fillStyle = '#7c6fdb';
    ctx.font = '700 17px Outfit, sans-serif';
    ctx.fillText('STICKER TRACKER', 63, y);
    y += 30;
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();

    // ── PROFILE CARD ──────────────────────────────────────────────────────────
    y += 22;
    drawRoundedRect(ctx, 60, y, 960, 112, 20, 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.08)');

    const displayUsername = (translations[activeLang].yourCollectionLabel || 'TU COLECCIÓN').toUpperCase();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px Outfit, sans-serif';
    ctx.fillText(displayUsername, 98, y + 46);

    let formattedDate = '-';
    if (lastUpdate > 0) {
        const loc = activeLang==='es' ? 'es-ES' : activeLang==='pt' ? 'pt-PT' :
                    activeLang==='it' ? 'it-IT' : 'en-US';
        formattedDate = new Intl.DateTimeFormat(loc,
            { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(lastUpdate));
    }
    ctx.fillStyle = '#718096';
    ctx.font = '500 17px Inter, sans-serif';
    ctx.fillText((translations[activeLang].lastUpdateLabel || 'Última actualización:') + ' ' + formattedDate, 98, y + 84);

    // Percent badge on the right
    let owned = 0, missing = 0, dupes = 0;
    for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (state[i]===1) owned++;
        else if (state[i]===2) { owned++; dupes++; }
        else missing++;
    }
    const pct = TOTAL_ITEMS > 0 ? Math.round((owned / TOTAL_ITEMS) * 100) : 0;
    ctx.textAlign = 'right';
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 36px Outfit, sans-serif';
    ctx.fillText(pct + '%', 1000, y + 52);
    ctx.fillStyle = '#718096';
    ctx.font = '500 15px Inter, sans-serif';
    ctx.fillText(owned + ' / ' + TOTAL_ITEMS, 1000, y + 80);
    ctx.textAlign = 'left';
    y += 112 + 20;

    // ── PROGRESS CARD ─────────────────────────────────────────────────────────
    drawRoundedRect(ctx, 60, y, 960, 170, 20, 'rgba(255,255,255,0.025)', 'rgba(255,255,255,0.065)');
    ctx.fillStyle = '#a0aec0';
    ctx.font = '600 13px Inter, sans-serif';
    ctx.fillText((translations[activeLang].albumProgress || 'Progreso del Álbum').toUpperCase(), 98, y + 38);

    // Progress bar
    const bX=98, bY=y+54, bW=884, bH=14;
    drawRoundedRect(ctx, bX, bY, bW, bH, 7, 'rgba(255,255,255,0.07)', null);
    if (pct > 0) {
        const fw = (pct/100)*bW;
        const bg = ctx.createLinearGradient(bX,0,bX+fw,0);
        bg.addColorStop(0,'#34d399'); bg.addColorStop(1,'#059669');
        drawRoundedRect(ctx, bX, bY, fw, bH, 7, bg, null);
    }

    // 3 stat columns
    const statCols = [98, 430, 762];
    const statLabels = [
        translations[activeLang].statOwnedLabel  || 'Tengo',
        translations[activeLang].statMissingLabel || 'Faltan',
        translations[activeLang].statDuplicatesLabel || 'Repetidas'
    ];
    const statVals  = [owned, missing, dupes];
    const statClrs  = ['#34d399','#f87171','#60a5fa'];
    for (let i=0; i<3; i++) {
        ctx.fillStyle = '#718096';
        ctx.font = '500 14px Inter, sans-serif';
        ctx.fillText(statLabels[i], statCols[i], y+112);
        ctx.fillStyle = statClrs[i];
        ctx.font = 'bold 30px Outfit, sans-serif';
        ctx.fillText(statVals[i].toString(), statCols[i], y+148);
    }
    y += 170 + 18;

    // ── DUPLICATES SECTION ────────────────────────────────────────────────────
    const dupTitle = (translations[activeLang].statDuplicatesLabel || 'Repetidas').toUpperCase();
    const noDup = translations[activeLang].shareImageNoDuplicates || 'Ninguna figurita repetida.';
    y = drawGroupSection(ctx, y, 2, '#60a5fa', dupTitle, noDup);

    // Divider
    y += 12;
    ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();

    // ── MISSING SECTION ───────────────────────────────────────────────────────
    if (missing > 400) {
        y += 30;
        ctx.fillStyle = '#f87171';
        ctx.fillRect(60, y, 4, 28);
        ctx.font = 'bold 20px Outfit, sans-serif';
        ctx.fillText((translations[activeLang].statMissingLabel || 'Faltan').toUpperCase(), 78, y+21);
        y += 56;
        ctx.fillStyle = '#a0aec0';
        ctx.font = '500 16px Inter, sans-serif';
        y = wrapText(ctx,
            translations[activeLang].shareImageTooManyMissing ||
            'Demasiadas faltantes para listar. Compartí el enlace del álbum.',
            60, y, 960, 26, 0);
        y += 30;
    } else {
        const misTit = (translations[activeLang].statMissingLabel || 'Faltan').toUpperCase();
        const noMis = translations[activeLang].shareImageNoMissing || '\u00a1Álbum completo!';
        y = drawGroupSection(ctx, y, 0, '#f87171', misTit, noMis);
    }

    // ── FOOTER ────────────────────────────────────────────────────────────────
    y += 30;
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();
    ctx.fillStyle = '#4a5568';
    ctx.font = '500 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('\u26BD FWC 2026 Sticker Tracker', W/2, y+28);
    ctx.textAlign = 'left';

    const cropH = y + 60;

    // ── CROP TO CONTENT HEIGHT ────────────────────────────────────────────────
    shareCanvasFinal = document.createElement('canvas');
    shareCanvasFinal.width  = W;
    shareCanvasFinal.height = cropH;
    shareCanvasFinal.getContext('2d').drawImage(shareCanvas, 0, 0);

    try {
        if (shareCanvasPreview) {
            shareCanvasPreview.src = shareCanvasFinal.toDataURL('image/png');
            shareCanvasPreview.style.display = 'block';
        }
        shareCanvas.style.display = 'none';
        const noticeEl = document.getElementById('local-security-notice');
        if (noticeEl) noticeEl.style.display = 'none';
    } catch(e) {
        console.warn('toDataURL failed:', e);
        shareCanvas.style.display = 'block';
        if (shareCanvasPreview) shareCanvasPreview.style.display = 'none';
        const noticeEl = document.getElementById('local-security-notice');
        if (noticeEl) {
            noticeEl.style.display = 'block';
            noticeEl.textContent = translations[activeLang].localSecurityNotice;
        }
    }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function _getFilename() {
    return 'FWC2026_tu_progreso.png';
}

function _isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// ─── DOWNLOAD (mobile-aware) ──────────────────────────────────────────────────
function downloadShareImage() {
    const canvas = shareCanvasFinal || shareCanvas;
    if (!canvas) return;

    canvas.toBlob(blob => {
        if (!blob) { showToast(translations[activeLang].toastCopyImageError); return; }

        if (_isIOS()) {
            // iOS Safari ignores <a download>; open in new tab so user can long-press → Save to Photos
            const url = URL.createObjectURL(blob);
            const newTab = window.open(url, '_blank');
            if (!newTab) {
                // Popup blocked — try data URL fallback
                const reader = new FileReader();
                reader.onload = () => {
                    const a = document.createElement('a');
                    a.href = reader.result;
                    a.download = _getFilename();
                    a.click();
                };
                reader.readAsDataURL(blob);
            }
            showToast(translations[activeLang].toastIOSDownloadHint ||
                'Mantén presionada la imagen para guardarla en Fotos 📷');
        } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = _getFilename();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 8000);
        }
    }, 'image/png');
}

// ─── COPY TO CLIPBOARD ────────────────────────────────────────────────────────
function copyShareImageToClipboard() {
    const canvas = shareCanvasFinal || shareCanvas;
    if (!canvas) return;
    try {
        const promise = new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (blob) resolve(blob);
                else reject(new Error('Blob generation failed'));
            }, 'image/png');
        });
        const item = new ClipboardItem({ 'image/png': promise });
        navigator.clipboard.write([item])
            .then(() => showToast(translations[activeLang].toastCopyImageSuccess))
            .catch(err => {
                console.error('Clipboard copy failed:', err);
                showToast(translations[activeLang].toastCopyImageError);
            });
    } catch(err) {
        console.error('Error copying to clipboard:', err);
        showToast(translations[activeLang].toastCopyImageError);
    }
}

// ─── TRADE IMAGE GENERATION ───────────────────────────────────────────────────
function openShareTradeImageModal() {
    if (dlgShareTradeImage) dlgShareTradeImage.showModal();
    // Wait for custom fonts before drawing to avoid blank/mis-measured text
    document.fonts.ready.then(() => {
        try { generateTradeImage(); }
        catch (err) { console.error('Error generating trade image:', err); }
    });
}

function getTradeGroupedData(friendState, isUserGiving) {
    const groupOrder = [
        'Grupo A','Grupo B','Grupo C','Grupo D',
        'Grupo E','Grupo F','Grupo G','Grupo H',
        'Grupo I','Grupo J','Grupo K','Grupo L','Especial'
    ];
    const labelMap = {
        'Grupo A':'A','Grupo B':'B','Grupo C':'C','Grupo D':'D',
        'Grupo E':'E','Grupo F':'F','Grupo G':'G','Grupo H':'H',
        'Grupo I':'I','Grupo J':'J','Grupo K':'K','Grupo L':'L','Especial':'FWC'
    };
    const groupMap = {};
    groupOrder.forEach(g => { groupMap[g] = []; });

    for (let tIdx = 0; tIdx < teams.length; tIdx++) {
        const team = teams[tIdx];
        const stickers = [];
        for (let s = 0; s < 20; s++) {
            const idx = tIdx * 20 + s;
            // If isUserGiving is true: user has duplicate (state 2), friend is missing (friendState 0)
            // If isUserGiving is false: friend has duplicate (friendState 2), user is missing (state 0)
            const condition = isUserGiving 
                ? (state[idx] === 2 && friendState[idx] === 0)
                : (friendState[idx] === 2 && state[idx] === 0);
            if (condition) {
                stickers.push(s + 1);
            }
        }
        if (stickers.length > 0) {
            const key = team.group || 'Especial';
            if (!groupMap[key]) groupMap[key] = [];
            groupMap[key].push({ emoji: team.emoji, code: team.code, stickers });
        }
    }
    return groupOrder
        .filter(g => groupMap[g] && groupMap[g].length > 0)
        .map(g => ({ label: labelMap[g] || g, teams: groupMap[g] }));
}

function drawTradeGroupSection(ctx, y, friendStateVal, isUserGiving, accentColor, title, noItemsText) {
    y += 30;
    // Accent bar + title
    ctx.fillStyle = accentColor;
    ctx.fillRect(60, y, 4, 28);
    ctx.font = 'bold 20px Outfit, sans-serif';
    ctx.fillStyle = accentColor;
    ctx.fillText(title, 78, y + 21);
    y += 46;

    // Thin separator
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();
    y += 16;

    const data = getTradeGroupedData(friendStateVal, isUserGiving);

    if (data.length === 0) {
        ctx.fillStyle = '#718096';
        ctx.font = '500 16px Inter, sans-serif';
        ctx.fillText(noItemsText, 60, y + 18);
        return y + 52;
    }

    for (const group of data) {
        const isLong = group.label.length > 1; // 'FWC'
        const badgeW = isLong ? 46 : 30;
        const badgeH = 26;
        const rowBaseY = y;

        // Badge pill
        drawRoundedRect(ctx, 60, rowBaseY, badgeW, badgeH, 7,
            accentColor + '28', accentColor + '88');
        ctx.fillStyle = accentColor;
        ctx.font = 'bold 12px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(group.label, 60 + badgeW / 2, rowBaseY + 17);
        ctx.textAlign = 'left';

        // Team entries as flowing text
        const lineStr = group.teams
            .map(t => t.emoji + t.code + ':' + t.stickers.join(','))
            .join('   ');
        ctx.fillStyle = '#cbd5e0';
        ctx.font = '500 15px Inter, sans-serif';
        const textX = 60 + badgeW + 14;
        const textStartY = rowBaseY + 18;
        const endY = wrapText(ctx, lineStr, textX, textStartY, 950 - badgeW, 24, 0);

        y = Math.max(rowBaseY + 34, endY + 14);
    }
    return y + 8;
}

function generateTradeImage() {
    if (!shareTradeCanvas || !comparedFriendState) return;
    shareTradeCanvasFinal = null;

    const W = 1080;
    const MAX_H = 3200; // draw on a tall canvas, crop afterwards

    shareTradeCanvas.width = W;
    shareTradeCanvas.height = MAX_H;
    const ctx = shareTradeCanvas.getContext('2d');

    // Background grad
    const bgGrad = ctx.createLinearGradient(0, 0, 0, MAX_H);
    bgGrad.addColorStop(0, '#0d0b21');
    bgGrad.addColorStop(0.45, '#111030');
    bgGrad.addColorStop(1, '#0a0c18');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, MAX_H);

    // Ambient glows
    const g1 = ctx.createRadialGradient(160, 260, 20, 160, 260, 480);
    g1.addColorStop(0, 'rgba(88,86,214,0.18)'); g1.addColorStop(1, 'rgba(88,86,214,0)');
    ctx.fillStyle = g1; ctx.beginPath(); ctx.arc(160, 260, 480, 0, Math.PI*2); ctx.fill();

    const g2 = ctx.createRadialGradient(980, 500, 20, 980, 500, 520);
    g2.addColorStop(0, 'rgba(248,113,113,0.10)'); g2.addColorStop(1, 'rgba(248,113,113,0)');
    ctx.fillStyle = g2; ctx.beginPath(); ctx.arc(980, 500, 520, 0, Math.PI*2); ctx.fill();

    // Subtle rings
    ctx.strokeStyle = 'rgba(255,255,255,0.012)'; ctx.lineWidth = 1.5;
    for (let i = 0; i < 4; i++) {
        ctx.beginPath(); ctx.arc(W/2, 380, 220 + i*190, 0, Math.PI*2); ctx.stroke();
    }

    let y = 0;

    // Header
    y += 88;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 46px Outfit, sans-serif';
    ctx.fillText('\u26BD ' + (translations[activeLang].shareTradeImageTitle || 'Imagen de Intercambio'), 60, y);
    y += 36;
    ctx.fillStyle = '#7c6fdb';
    ctx.font = '700 17px Outfit, sans-serif';
    ctx.fillText('STICKER TRACKER', 63, y);
    y += 30;
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();

    // Both collectors card
    y += 22;
    drawRoundedRect(ctx, 60, y, 960, 112, 20, 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.08)');

    const name1 = translations[activeLang].userLabel || 'Tú';
    const name2 = comparedFriendName || (activeLang === 'en' ? 'Friend' : (activeLang === 'pt' ? 'Amigo' : (activeLang === 'it' ? 'Amico' : 'Tu amigo')));

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px Outfit, sans-serif';
    ctx.fillText(`${name1} \u21c4 ${name2}`, 98, y + 46);

    ctx.fillStyle = '#718096';
    ctx.font = '500 17px Inter, sans-serif';
    const tradeTimeText = translations[activeLang].lastUpdateLabel || 'Actualizado:';
    ctx.fillText(`${tradeTimeText} ${new Intl.DateTimeFormat(activeLang === 'es' ? 'es-ES' : 'en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())}`, 98, y + 84);
    
    y += 112 + 20;

    // Duplicates list (Friend gives you)
    const titleFriendGives = (comparedFriendName 
        ? translations[activeLang].friendGivesTitleWithName.replace('{name}', comparedFriendName)
        : translations[activeLang].friendGivesTitle).toUpperCase();
    const noFriendGives = translations[activeLang].compareNoMatches || 'Ninguna figurita coincide.';
    y = drawTradeGroupSection(ctx, y, comparedFriendState, false, '#10b981', titleFriendGives, noFriendGives);

    // Divider
    y += 12;
    ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();

    // Missing list (You give friend)
    const titleUserGives = (comparedFriendName 
        ? translations[activeLang].userGivesTitleWithName.replace('{name}', comparedFriendName)
        : translations[activeLang].userGivesTitle).toUpperCase();
    const noUserGives = translations[activeLang].compareNoMatches || 'Ninguna figurita coincide.';
    y = drawTradeGroupSection(ctx, y, comparedFriendState, true, '#3b82f6', titleUserGives, noUserGives);

    // Footer
    y += 30;
    ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, y); ctx.lineTo(1020, y); ctx.stroke();
    ctx.fillStyle = '#4a5568';
    ctx.font = '500 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('\u26BD FWC 2026 Sticker Tracker', W/2, y+28);
    ctx.textAlign = 'left';

    const cropH = y + 60;

    shareTradeCanvasFinal = document.createElement('canvas');
    shareTradeCanvasFinal.width  = W;
    shareTradeCanvasFinal.height = cropH;
    shareTradeCanvasFinal.getContext('2d').drawImage(shareTradeCanvas, 0, 0);

    try {
        if (shareTradeCanvasPreview) {
            shareTradeCanvasPreview.src = shareTradeCanvasFinal.toDataURL('image/png');
            shareTradeCanvasPreview.style.display = 'block';
        }
        shareTradeCanvas.style.display = 'none';
    } catch(e) {
        console.warn('Trade canvas toDataURL failed:', e);
        shareTradeCanvas.style.display = 'block';
        if (shareTradeCanvasPreview) shareTradeCanvasPreview.style.display = 'none';
    }
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

window.addEventListener('DOMContentLoaded', init);
