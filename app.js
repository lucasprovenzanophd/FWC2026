const teams = [
    { originalIndex: 0, emoji: '🇺🇸', group: 'Grupo D', names: { es: 'EE. UU.', en: 'USA', pt: 'EUA', it: 'Stati Uniti' } },
    { originalIndex: 1, emoji: '🇲🇽', group: 'Grupo A', names: { es: 'México', en: 'Mexico', pt: 'México', it: 'Messico' } },
    { originalIndex: 2, emoji: '🇨🇦', group: 'Grupo B', names: { es: 'Canadá', en: 'Canada', pt: 'Canadá', it: 'Canada' } },
    { originalIndex: 3, emoji: '🇿🇦', group: 'Grupo A', names: { es: 'Sudáfrica', en: 'South Africa', pt: 'África do Sul', it: 'Sudafrica' } },
    { originalIndex: 4, emoji: '🇰🇷', group: 'Grupo A', names: { es: 'Corea del Sur', en: 'South Korea', pt: 'Coreia do Sul', it: 'Corea del Sud' } },
    { originalIndex: 5, emoji: '🇨🇿', group: 'Grupo A', names: { es: 'Chequia', en: 'Czechia', pt: 'Chéquia', it: 'Repubblica Ceca' } },
    { originalIndex: 6, emoji: '🇧🇦', group: 'Grupo B', names: { es: 'Bosnia y Herz.', en: 'Bosnia & Herz.', pt: 'Bósnia e Herz.', it: 'Bosnia ed Erz.' } },
    { originalIndex: 7, emoji: '🇶🇦', group: 'Grupo B', names: { es: 'Qatar', en: 'Qatar', pt: 'Catar', it: 'Qatar' } },
    { originalIndex: 8, emoji: '🇨🇭', group: 'Grupo B', names: { es: 'Suiza', en: 'Switzerland', pt: 'Suíça', it: 'Svizzera' } },
    { originalIndex: 9, emoji: '🇧🇷', group: 'Grupo C', names: { es: 'Brasil', en: 'Brazil', pt: 'Brasil', it: 'Brasile' } },
    { originalIndex: 10, emoji: '🇲🇦', group: 'Grupo C', names: { es: 'Marruecos', en: 'Morocco', pt: 'Marrocos', it: 'Marocco' } },
    { originalIndex: 11, emoji: '🇭🇹', group: 'Grupo C', names: { es: 'Haití', en: 'Haiti', pt: 'Haiti', it: 'Haiti' } },
    { originalIndex: 12, emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'Grupo C', names: { es: 'Escocia', en: 'Scotland', pt: 'Escócia', it: 'Scozia' } },
    { originalIndex: 13, emoji: '🇵🇾', group: 'Grupo D', names: { es: 'Paraguay', en: 'Paraguay', pt: 'Paraguai', it: 'Paraguay' } },
    { originalIndex: 14, emoji: '🇦🇺', group: 'Grupo D', names: { es: 'Australia', en: 'Australia', pt: 'Austrália', it: 'Australia' } },
    { originalIndex: 15, emoji: '🇹🇷', group: 'Grupo D', names: { es: 'Turquía', en: 'Turkey', pt: 'Turquia', it: 'Turchia' } },
    { originalIndex: 16, emoji: '🇩🇪', group: 'Grupo E', names: { es: 'Alemania', en: 'Germany', pt: 'Alemanha', it: 'Germania' } },
    { originalIndex: 17, emoji: '🇨🇼', group: 'Grupo E', names: { es: 'Curazao', en: 'Curacao', pt: 'Curaçao', it: 'Curaçao' } },
    { originalIndex: 18, emoji: '🇨🇮', group: 'Grupo E', names: { es: 'Costa de Marfil', en: 'Ivory Coast', pt: 'Costa do Marfim', it: 'Costa d\'Avorio' } },
    { originalIndex: 19, emoji: '🇪🇨', group: 'Grupo E', names: { es: 'Ecuador', en: 'Ecuador', pt: 'Equador', it: 'Ecuador' } },
    { originalIndex: 20, emoji: '🇳🇱', group: 'Grupo F', names: { es: 'Países Bajos', en: 'Netherlands', pt: 'Países Baixos', it: 'Paesi Bassi' } },
    { originalIndex: 21, emoji: '🇯🇵', group: 'Grupo F', names: { es: 'Japón', en: 'Japan', pt: 'Japão', it: 'Giappone' } },
    { originalIndex: 22, emoji: '🇸🇪', group: 'Grupo F', names: { es: 'Suecia', en: 'Sweden', pt: 'Suécia', it: 'Svezia' } },
    { originalIndex: 23, emoji: '🇹🇳', group: 'Grupo F', names: { es: 'Túnez', en: 'Tunisia', pt: 'Tunísia', it: 'Tunisia' } },
    { originalIndex: 24, emoji: '🇧🇪', group: 'Grupo G', names: { es: 'Bélgica', en: 'Belgium', pt: 'Bélgica', it: 'Belgio' } },
    { originalIndex: 25, emoji: '🇪🇬', group: 'Grupo G', names: { es: 'Egipto', en: 'Egypt', pt: 'Egito', it: 'Egitto' } },
    { originalIndex: 26, emoji: '🇮🇷', group: 'Grupo G', names: { es: 'Irán', en: 'Iran', pt: 'Irã', it: 'Iran' } },
    { originalIndex: 27, emoji: '🇳🇿', group: 'Grupo G', names: { es: 'Nueva Zelanda', en: 'New Zealand', pt: 'Nova Zelândia', it: 'Nuova Zelanda' } },
    { originalIndex: 28, emoji: '🇪🇸', group: 'Grupo H', names: { es: 'España', en: 'Spain', pt: 'Espanha', it: 'Spagna' } },
    { originalIndex: 29, emoji: '🇨🇻', group: 'Grupo H', names: { es: 'Cabo Verde', en: 'Cape Verde', pt: 'Cabo Verde', it: 'Capo Verde' } },
    { originalIndex: 30, emoji: '🇸🇦', group: 'Grupo H', names: { es: 'Arabia Saudita', en: 'Saudi Arabia', pt: 'Arábia Saudita', it: 'Arabia Saudita' } },
    { originalIndex: 31, emoji: '🇺🇾', group: 'Grupo H', names: { es: 'Uruguay', en: 'Uruguay', pt: 'Uruguai', it: 'Uruguay' } },
    { originalIndex: 32, emoji: '🇫🇷', group: 'Grupo I', names: { es: 'Francia', en: 'France', pt: 'França', it: 'Francia' } },
    { originalIndex: 33, emoji: '🇸🇳', group: 'Grupo I', names: { es: 'Senegal', en: 'Senegal', pt: 'Senegal', it: 'Senegal' } },
    { originalIndex: 34, emoji: '🇮🇶', group: 'Grupo I', names: { es: 'Irak', en: 'Iraq', pt: 'Iraque', it: 'Iraq' } },
    { originalIndex: 35, emoji: '🇳🇴', group: 'Grupo I', names: { es: 'Noruega', en: 'Norway', pt: 'Noruega', it: 'Norvegia' } },
    { originalIndex: 36, emoji: '🇦🇷', group: 'Grupo J', names: { es: 'Argentina', en: 'Argentina', pt: 'Argentina', it: 'Argentina' } },
    { originalIndex: 37, emoji: '🇩🇿', group: 'Grupo J', names: { es: 'Argelia', en: 'Algeria', pt: 'Argélia', it: 'Algeria' } },
    { originalIndex: 38, emoji: '🇦🇹', group: 'Grupo J', names: { es: 'Austria', en: 'Austria', pt: 'Áustria', it: 'Austria' } },
    { originalIndex: 39, emoji: '🇯🇴', group: 'Grupo J', names: { es: 'Jordania', en: 'Jordan', pt: 'Jordânia', it: 'Giordania' } },
    { originalIndex: 40, emoji: '🇵🇹', group: 'Grupo K', names: { es: 'Portugal', en: 'Portugal', pt: 'Portugal', it: 'Portogallo' } },
    { originalIndex: 41, emoji: '🇨🇩', group: 'Grupo K', names: { es: 'RD Congo', en: 'DR Congo', pt: 'RD Congo', it: 'RD del Congo' } },
    { originalIndex: 42, emoji: '🇺🇿', group: 'Grupo K', names: { es: 'Uzbekistán', en: 'Uzbekistan', pt: 'Uzbequistão', it: 'Uzbekistan' } },
    { originalIndex: 43, emoji: '🇨🇴', group: 'Grupo K', names: { es: 'Colombia', en: 'Colombia', pt: 'Colômbia', it: 'Colombia' } },
    { originalIndex: 44, emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'Grupo L', names: { es: 'Inglaterra', en: 'England', pt: 'Inglaterra', it: 'Inghilterra' } },
    { originalIndex: 45, emoji: '🇭🇷', group: 'Grupo L', names: { es: 'Croacia', en: 'Croatia', pt: 'Croácia', it: 'Croazia' } },
    { originalIndex: 46, emoji: '🇬🇭', group: 'Grupo L', names: { es: 'Ghana', en: 'Ghana', pt: 'Gana', it: 'Ghana' } },
    { originalIndex: 47, emoji: '🇵🇦', group: 'Grupo L', names: { es: 'Panamá', en: 'Panama', pt: 'Panamá', it: 'Panama' } },
    { originalIndex: 48, emoji: '⚽', group: 'Especial', names: { es: 'Sección FWC', en: 'FWC Section', pt: 'Seção FWC', it: 'Sezione FWC' } }
];

const translations = {
    es: {
        title: "Fifa World Cup 2026",
        subtitle: "TRACKER DE FIGURITAS",
        btnShare: "Copiar Enlace del Álbum",
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
        step2Desc: "Tus datos se guardan al instante en tu navegador (Local Storage) y en la dirección URL (hash). Puedes cerrar o recargar la página sin perder nada.",
        step3Title: "Intercambio inteligente",
        step3Desc: "Copia tu dirección URL con el botón 'Compartir'. Con el botón 'Intercambiar', pega el enlace de tu amigo para ver qué figuritas pueden cambiarse.",
        compareTitle: "Intercambiar con Amigos",
        compareInstruction: "Pega aquí el enlace del tracker de tu amigo para calcular automáticamente qué figuritas pueden intercambiar:",
        friendLinkPlaceholder: "Enlace del tracker de tu amigo...",
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
        importInstruction: "Pega aquí tu código de respaldo JSON o un enlace hash completo. Esto sobrescribirá tu estado actual:",
        importPlaceholder: "Pega el código JSON o enlace hash aquí...",
        importErrorMsgText: "El código proporcionado no es válido.",
        btnDoImportText: "Restaurar Datos",
        resetTitle: "¿Reiniciar Álbum?",
        resetWarning1: "Esta acción borrará todo tu progreso actual y marcará todas las figuritas como faltantes.",
        resetWarning2: "Esta acción no se puede deshacer.",
        btnCancelResetText: "Cancelar",
        btnConfirmResetText: "Sí, borrar todo",
        toastCopyShare: "¡Enlace de compartir copiado al portapapeles!",
        toastCopyBackup: "¡Código de respaldo copiado!",
        toastImportSuccess: "¡Datos importados con éxito!",
        toastResetSuccess: "El progreso del álbum ha sido reiniciado.",
        noResultsText: "No se encontraron selecciones coincidentes.",
        toastThemeChanged: "¡Tema cambiado!",
        toastCopyShareError: "No se pudo copiar el enlace al portapapeles.",
        usernameLabel: "Tu Nombre:",
        usernamePlaceholder: "Tu nombre...",
        lastUpdateLabel: "Última actualización:",
        friendGivesTitleWithName: "{name} te da",
        userGivesTitleWithName: "Tú le das a {name}",
        friendLastUpdated: "Última actualización de {name}: {date}",
        btnShareImage: "Generar Imagen",
        shareImageTitle: "Resumen para Compartir",
        shareImageInstruction: "Aquí tienes una imagen con el resumen de tu álbum lista para descargar o copiar:",
        btnDownloadCanvas: "Descargar Imagen",
        btnCopyCanvas: "Copiar al Portapapeles",
        toastCopyImageSuccess: "¡Imagen copiada al portapapeles!",
        toastCopyImageError: "No se pudo copiar la imagen automáticamente. Descárgala o mantén presionado para guardarla.",
        shareImageTooManyMissing: "Demasiadas figuritas faltantes para listar. ¡Usa el enlace del álbum para ver la lista completa!",
        shareImageNoDuplicates: "Ninguna figurita repetida.",
        shareImageNoMissing: "¡Álbum completo! Ninguna figurita faltante.",
        localSecurityNotice: "Nota: Debido a restricciones de seguridad de archivos locales en este navegador, la descarga y copia automática pueden estar limitadas. Puedes descargar la imagen haciendo clic derecho (o manteniendo presionado) en ella, o tomándole una captura de pantalla."
    },
    en: {
        title: "Fifa World Cup 2026",
        subtitle: "STICKER TRACKER",
        btnShare: "Copy Album Link",
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
        step2Desc: "Your data is instantly saved in your browser (Local Storage) and in the URL hash. You can close or reload the page without losing anything.",
        step3Title: "Smart Trading",
        step3Desc: "Copy your URL using the 'Share' button. Click the 'Trade' button and paste your friend's link to see which stickers you can swap.",
        compareTitle: "Trade with Friends",
        compareInstruction: "Paste your friend's tracker link here to automatically calculate which stickers you can swap:",
        friendLinkPlaceholder: "Friend's tracker link...",
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
        importInstruction: "Paste your JSON backup code or a full hash link here. This will overwrite your current state:",
        importPlaceholder: "Paste JSON code or hash link here...",
        importErrorMsgText: "The code provided is invalid.",
        btnDoImportText: "Restore Data",
        resetTitle: "Reset Album?",
        resetWarning1: "This action will clear all your current progress and mark all stickers as missing.",
        resetWarning2: "This action cannot be undone.",
        btnCancelResetText: "Cancel",
        btnConfirmResetText: "Yes, delete all",
        toastCopyShare: "Share link copied to clipboard!",
        toastCopyBackup: "Backup code copied!",
        toastImportSuccess: "Data imported successfully!",
        toastResetSuccess: "Album progress has been reset.",
        noResultsText: "No matching teams found.",
        toastThemeChanged: "Theme changed!",
        toastCopyShareError: "Could not copy link to clipboard.",
        usernameLabel: "Your Name:",
        usernamePlaceholder: "Your name...",
        lastUpdateLabel: "Last updated:",
        friendGivesTitleWithName: "{name} gives you",
        userGivesTitleWithName: "You give {name}",
        friendLastUpdated: "Last updated by {name}: {date}",
        btnShareImage: "Generate Image",
        shareImageTitle: "Shareable Summary",
        shareImageInstruction: "Here is an image with your album summary ready to download or copy:",
        btnDownloadCanvas: "Download Image",
        btnCopyCanvas: "Copy to Clipboard",
        toastCopyImageSuccess: "Image copied to clipboard!",
        toastCopyImageError: "Could not copy image automatically. Please download it instead.",
        shareImageTooManyMissing: "Too many missing stickers to list. Use the album link to view the full list!",
        shareImageNoDuplicates: "No duplicate stickers.",
        shareImageNoMissing: "Album completed! No missing stickers.",
        localSecurityNotice: "Note: Due to local file security restrictions in this browser, automatic download and copy may be limited. You can save the image by right-clicking (or long pressing) on it, or by taking a screenshot."
    },
    pt: {
        title: "Fifa World Cup 2026",
        subtitle: "TRACKER DE FIGURINHAS",
        btnShare: "Copiar Link do Álbum",
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
        step2Desc: "Seus dados são salvos instantaneamente no seu navegador (Local Storage) e no hash da URL. Você pode fechar ou recarregar a página sem perder nada.",
        step3Title: "Troca inteligente",
        step3Desc: "Copie o link usando o botão 'Compartilhar'. Clique no botão 'Trocar' e cole o link do seu amigo para ver quais figurinhas podem ser trocadas.",
        compareTitle: "Trocar com Amigos",
        compareInstruction: "Cole aqui o link do tracker do seu amigo para calcular automaticamente quais figurinhas vocês podem trocar:",
        friendLinkPlaceholder: "Link do tracker do seu amigo...",
        btnDoCompareText: "Comparar",
        friendGivesTitle: "Seu amigo te dá",
        friendGivesSubtitle: "Figurinhas que seu amigo tem repetidas (State 2) e você está precisando (State 0):",
        userGivesTitle: "Você dá ao seu amigo",
        userGivesSubtitle: "Figurinhas que você tem repetidas (State 2) e seu amigo está precisando (State 0):",
        compareNoMatches: "Nenhuma figurinha coincide para este caso.",
        compareInvalidLink: "O link ou código do amigo não é válido.",
        exportImportTitle: "Backup e Importar Dados",
        tabExport: "Exportar",
        tabImport: "Importar",
        exportInstruction: "Copie este código de backup e salve em um local seguro. Ele contém todo o seu progresso atual:",
        btnCopyBackupText: "Copiar Código de Backup",
        importInstruction: "Cole aqui o seu código de backup JSON ou link hash completo. Isso substituirá o seu estado atual:",
        importPlaceholder: "Cole o código JSON ou link hash aqui...",
        importErrorMsgText: "O código fornecido não é válido.",
        btnDoImportText: "Restaurar Dados",
        resetTitle: "Reiniciar Álbum?",
        resetWarning1: "Esta ação apagará todo o seu progresso atual e marcará todas as figurinhas como faltando.",
        resetWarning2: "Esta ação não pode ser desfeita.",
        btnCancelResetText: "Cancelar",
        btnConfirmResetText: "Sim, apagar tudo",
        toastCopyShare: "Link de compartilhamento copiado!",
        toastCopyBackup: "Código de backup copiado!",
        toastImportSuccess: "Dados importados com sucesso!",
        toastResetSuccess: "O progresso do álbum foi reiniciado.",
        noResultsText: "Nenhuma seleção correspondente encontrada.",
        toastThemeChanged: "Tema alterado!",
        toastCopyShareError: "Não foi possível copiar o link para a área de transferência.",
        usernameLabel: "Seu Nome:",
        usernamePlaceholder: "Seu nome...",
        lastUpdateLabel: "Última atualização:",
        friendGivesTitleWithName: "{name} te dá",
        userGivesTitleWithName: "Você dá para {name}",
        friendLastUpdated: "Última atualização de {name}: {date}",
        btnShareImage: "Gerar Imagem",
        shareImageTitle: "Resumo para Compartilhar",
        shareImageInstruction: "Aqui está uma imagem com o resumo do seu álbum pronta para baixar ou copiar:",
        btnDownloadCanvas: "Baixar Imagem",
        btnCopyCanvas: "Copiar para Área de Transferência",
        toastCopyImageSuccess: "Imagem copiada para a área de transferência!",
        toastCopyImageError: "Não foi possível copiar a imagem automaticamente. Baixe a imagem para salvar.",
        shareImageTooManyMissing: "Muitas figurinhas faltando para listar. Use o link do álbum para ver a lista completa!",
        shareImageNoDuplicates: "Nenhuma figurinha repetida.",
        shareImageNoMissing: "Álbum completo! Nenhuma figurinha faltando.",
        localSecurityNotice: "Nota: Devido a restrições de segurança de arquivos locais neste navegador, o download e a cópia automática podem estar limitados. Você pode salvar a imagem clicando com o botão direito (ou pressionando e segurando) nela, ou tirando um print."
    },
    it: {
        title: "Fifa World Cup 2026",
        subtitle: "TRACKER DI FIGURINE",
        btnShare: "Copia Link Album",
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
        step2Desc: "I tuoi dati vengono salvati istantaneamente nel tuo browser (Local Storage) e nell'hash dell'URL. Puoi chiudere o ricaricare la pagina senza perdere nulla.",
        step3Title: "Scambio intelligente",
        step3Desc: "Copia il tuo URL usando il pulsante 'Condividi'. Clicca sul pulsante 'Scambia' e incolla il link del tuo amico per vedere quali figurine potete scambiarvi.",
        compareTitle: "Scambia con gli Amici",
        compareInstruction: "Incolla qui il link del tracker del tuo amico per calcolare automaticamente quali figurine potete scambiarvi:",
        friendLinkPlaceholder: "Link del tracker del tuo amico...",
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
        importInstruction: "Incolla qui il tuo codice di backup JSON o un link hash completo. Questo sovrascriverà il tuo stato attuale:",
        importPlaceholder: "Incolla il codice JSON o il link hash qui...",
        importErrorMsgText: "Il codice fornito non è valido.",
        btnDoImportText: "Ripristina Dati",
        resetTitle: "Reinizializzare l'Album?",
        resetWarning1: "Questa azione cancellerà tutti i tuoi progressi attuali e segnerà tutte le figurine come mancanti.",
        resetWarning2: "Questa azione non può essere annullata.",
        btnCancelResetText: "Annulla",
        btnConfirmResetText: "Sì, cancella tutto",
        toastCopyShare: "Link di condivisione copiato negli appunti!",
        toastCopyBackup: "Codice di backup copiato!",
        toastImportSuccess: "Dati importati con successo!",
        toastResetSuccess: "Il progresso dell'album è stato reinizializzato.",
        noResultsText: "Nessuna squadra corrispondente trovata.",
        toastThemeChanged: "Tema cambiato!",
        toastCopyShareError: "Impossibile copiare il link negli appunti.",
        usernameLabel: "Il tuo nome:",
        usernamePlaceholder: "Il tuo nome...",
        lastUpdateLabel: "Ultimo aggiornamento:",
        friendGivesTitleWithName: "{name} ti dà",
        userGivesTitleWithName: "Tu dai a {name}",
        friendLastUpdated: "Ultimo aggiornamento di {name}: {date}",
        btnShareImage: "Genera Immagine",
        shareImageTitle: "Riepilogo da Condividere",
        shareImageInstruction: "Ecco un'immagine con il riepilogo del tuo album pronta da scaricare o copiare:",
        btnDownloadCanvas: "Scarica Immagine",
        btnCopyCanvas: "Copia negli Appunti",
        toastCopyImageSuccess: "Immagine copiata negli appunti!",
        toastCopyImageError: "Impossibile copiare l'immagine automaticamente. Per favore scaricala.",
        shareImageTooManyMissing: "Troppe figurine mancanti da elencare. Usa il link dell'album per vedere l'elenco completo!",
        shareImageNoDuplicates: "Nessuna figurina doppia.",
        shareImageNoMissing: "Album completato! Nessuna figurina mancante.",
        localSecurityNotice: "Nota: A causa delle restrizioni di sicurezza dei file locali in questo browser, il download e la copia automatica potrebbero essere limitati. Puoi salvare l'immagine facendo clic con il pulsante destro del mouse (o tenendo premuto) su di essa, o facendo uno screenshot."
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

let username = '';
let lastUpdate = 0;

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

function loadState() {
    const hash = window.location.hash.substring(1);
    const parts = hash.split(/[?&]/);
    const stateHash = parts[0];
    if (stateHash.length === 262 && /^[A-Za-z0-9\-_]{262}$/.test(stateHash)) {
        state = decompressState(stateHash);
        saveStateToLocalStorage();
    } else {
        const savedState = localStorage.getItem('sticker-tracker-state');
        if (savedState && savedState.length === 262 && /^[A-Za-z0-9\-_]{262}$/.test(savedState)) {
            state = decompressState(savedState);
            updateURLHash();
        } else {
            initializeEmptyState();
        }
    }
    let urlUsername = '';
    let urlTimestamp = 0;
    if (parts.length > 1) {
        const qIndex = hash.indexOf('?');
        const qStr = qIndex !== -1 ? hash.substring(qIndex + 1) : hash.substring(stateHash.length + 1);
        const queryParams = new URLSearchParams(qStr);
        urlUsername = queryParams.get('u') || '';
        const tVal = queryParams.get('t');
        if (tVal) {
            const parsedT = parseInt(tVal, 10);
            if (!isNaN(parsedT) && parsedT > 0) {
                urlTimestamp = parsedT;
            }
        }
    }
    if (urlUsername) {
        username = urlUsername.substring(0, 15);
    } else {
        username = localStorage.getItem('sticker-tracker-username') || '';
    }
    if (urlTimestamp > 0) {
        lastUpdate = urlTimestamp;
    } else {
        const savedUpdate = localStorage.getItem('sticker-tracker-last-update');
        lastUpdate = savedUpdate ? parseInt(savedUpdate, 10) || 0 : 0;
    }
    localStorage.setItem('sticker-tracker-username', username);
    localStorage.setItem('sticker-tracker-last-update', lastUpdate);
    updateURLHash();
}

function initializeEmptyState() {
    state = new Array(TOTAL_ITEMS).fill(0);
    lastUpdate = 0;
    username = '';
    saveState();
}

function saveState() {
    lastUpdate = Date.now();
    updateLastUpdateDisplay();
    updateURLHash();
    saveStateToLocalStorage();
}

function saveStateToLocalStorage() {
    localStorage.setItem('sticker-tracker-state', compressState(state));
    localStorage.setItem('sticker-tracker-username', username);
    localStorage.setItem('sticker-tracker-last-update', lastUpdate);
}

function updateURLHash() {
    let suffix = '';
    const params = new URLSearchParams();
    if (username) params.append('u', username);
    if (lastUpdate > 0) params.append('t', lastUpdate);
    const paramStr = params.toString();
    if (paramStr) suffix = '?' + paramStr;
    history.replaceState(null, null, '#' + compressState(state) + suffix);
}

function renderProfile() {
    if (usernameInput) {
        usernameInput.value = username;
    }
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

    [dlgCompare, dlgExportImport, dlgConfirmReset].forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            const rect = dialog.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right ||
                e.clientY < rect.top || e.clientY > rect.bottom) {
                dialog.close();
            }
        });
    });

    if (usernameInput) {
        usernameInput.addEventListener('input', (e) => {
            username = e.target.value.trim().substring(0, 15);
            updateURLHash();
            localStorage.setItem('sticker-tracker-username', username);
        });
        usernameInput.addEventListener('change', () => {
            lastUpdate = Date.now();
            updateLastUpdateDisplay();
            updateURLHash();
            saveStateToLocalStorage();
        });
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
}

function setActiveFilter(filter, button) {
    [filterAllBtn, filterMissingBtn, filterDuplicatesBtn].forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = filter;
    applyFilters();
}

function copyShareURL() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
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
    let importedUsername = '';
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
            importedUsername = queryParams.get('u') || '';
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
        if (importedUsername) username = importedUsername.substring(0, 15);
        lastUpdate = importedTimestamp > 0 ? importedTimestamp : Date.now();
        saveStateToLocalStorage();
        updateURLHash();
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
    username = '';
    if (usernameInput) usernameInput.value = '';
    lastUpdate = 0;
    updateLastUpdateDisplay();
    updateURLHash();
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

function getGroupedStickersText(stateVal) {
    const groups = [];
    for (let tIndex = 0; tIndex < teams.length; tIndex++) {
        const team = teams[tIndex];
        const teamStickers = [];
        for (let s = 0; s < 20; s++) {
            const stickerId = tIndex * 20 + s;
            if (state[stickerId] === stateVal) {
                teamStickers.push(s + 1);
            }
        }
        if (teamStickers.length > 0) {
            const teamName = team.names[activeLang] || team.names['es'];
            const emoji = team.emoji;
            groups.push(`${emoji} ${teamName}: ${teamStickers.join(', ')}`);
        }
    }
    return groups.join('  •  ');
}

function openShareImageModal() {
    try {
        generateShareImage();
    } catch (err) {
        console.error("Error generating image:", err);
    }
    if (dlgShareImage) {
        dlgShareImage.showModal();
    }
}

function generateShareImage() {
    if (!shareCanvas) return;
    const ctx = shareCanvas.getContext('2d');
    
    ctx.clearRect(0, 0, shareCanvas.width, shareCanvas.height);
    
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 1350);
    bgGrad.addColorStop(0, '#0d0b21');
    bgGrad.addColorStop(1, '#1b1747');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1350);
    
    const glow1 = ctx.createRadialGradient(200, 300, 50, 200, 300, 500);
    glow1.addColorStop(0, 'rgba(88, 86, 214, 0.15)');
    glow1.addColorStop(1, 'rgba(88, 86, 214, 0)');
    ctx.fillStyle = glow1;
    ctx.beginPath();
    ctx.arc(200, 300, 500, 0, Math.PI * 2);
    ctx.fill();
    
    const glow2 = ctx.createRadialGradient(900, 900, 50, 900, 900, 600);
    glow2.addColorStop(0, 'rgba(255, 45, 85, 0.12)');
    glow2.addColorStop(1, 'rgba(255, 45, 85, 0)');
    ctx.fillStyle = glow2;
    ctx.beginPath();
    ctx.arc(900, 900, 600, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(540, 675, 200 + i * 150, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    ctx.fillStyle = '#ffffff';
    ctx.font = "bold 44px Outfit, Inter, sans-serif";
    ctx.fillText("⚽ FIFA World Cup 2026", 80, 105);
    
    ctx.fillStyle = '#a0aec0';
    ctx.font = "800 20px Outfit, Inter, sans-serif";
    ctx.fillText("STICKER TRACKER PREMIUM", 85, 145);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, 175);
    ctx.lineTo(1000, 175);
    ctx.stroke();
    
    drawRoundedRect(ctx, 80, 205, 920, 120, 24, "rgba(255, 255, 255, 0.025)", "rgba(255, 255, 255, 0.06)");
    
    const displayUsername = username ? username : (activeLang === 'es' ? "Mi Tracker" : (activeLang === 'pt' ? "Meu Tracker" : (activeLang === 'it' ? "Il mio Tracker" : "My Tracker")));
    ctx.fillStyle = '#ffffff';
    ctx.font = "bold 28px Outfit, Inter, sans-serif";
    ctx.fillText(displayUsername, 120, 260);
    
    let formattedDate = '-';
    if (lastUpdate > 0) {
        const locale = activeLang === 'es' ? 'es-ES' : (activeLang === 'pt' ? 'pt-PT' : (activeLang === 'it' ? 'it-IT' : 'en-US'));
        const formatter = new Intl.DateTimeFormat(locale, {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
        formattedDate = formatter.format(new Date(lastUpdate));
    }
    ctx.fillStyle = '#a0aec0';
    ctx.font = "500 18px Inter, sans-serif";
    ctx.fillText((translations[activeLang].lastUpdateLabel || "Última actualización:") + " " + formattedDate, 120, 298);
    
    drawRoundedRect(ctx, 80, 350, 920, 220, 24, "rgba(255, 255, 255, 0.025)", "rgba(255, 255, 255, 0.06)");
    
    let ownedCount = 0;
    let missingCount = 0;
    let duplicateCount = 0;
    for (let i = 0; i < TOTAL_ITEMS; i++) {
        if (state[i] === 1) ownedCount++;
        else if (state[i] === 2) {
            ownedCount++;
            duplicateCount++;
        } else {
            missingCount++;
        }
    }
    const percent = TOTAL_ITEMS > 0 ? Math.round((ownedCount / TOTAL_ITEMS) * 100) : 0;
    
    ctx.fillStyle = '#ffffff';
    ctx.font = "bold 24px Outfit, Inter, sans-serif";
    ctx.fillText(translations[activeLang].albumProgress || "Progreso del Álbum", 120, 405);
    
    ctx.fillStyle = '#34d399';
    ctx.font = "bold 24px Outfit, Inter, sans-serif";
    ctx.textAlign = 'right';
    const progressBadgeText = `${percent}% (${ownedCount} / ${TOTAL_ITEMS})`;
    ctx.fillText(progressBadgeText, 960, 405);
    ctx.textAlign = 'left';
    
    const barX = 120;
    const barY = 425;
    const barWidth = 840;
    const barHeight = 16;
    drawRoundedRect(ctx, barX, barY, barWidth, barHeight, 8, "rgba(255, 255, 255, 0.08)", null);
    if (percent > 0) {
        const fillWidth = (percent / 100) * barWidth;
        const barGrad = ctx.createLinearGradient(barX, 0, barX + fillWidth, 0);
        barGrad.addColorStop(0, '#34d399');
        barGrad.addColorStop(1, '#059669');
        drawRoundedRect(ctx, barX, barY, fillWidth, barHeight, 8, barGrad, null);
    }
    
    ctx.fillStyle = '#a0aec0';
    ctx.font = "500 16px Inter, sans-serif";
    ctx.fillText(translations[activeLang].statOwnedLabel || "Tengo (Únicas)", 120, 490);
    ctx.fillStyle = '#34d399';
    ctx.font = "bold 26px Outfit, Inter, sans-serif";
    ctx.fillText(ownedCount.toString(), 120, 525);
    
    ctx.fillStyle = '#a0aec0';
    ctx.font = "500 16px Inter, sans-serif";
    ctx.fillText(translations[activeLang].statMissingLabel || "Faltan", 420, 490);
    ctx.fillStyle = '#f87171';
    ctx.font = "bold 26px Outfit, Inter, sans-serif";
    ctx.fillText(missingCount.toString(), 420, 525);
    
    ctx.fillStyle = '#a0aec0';
    ctx.font = "500 16px Inter, sans-serif";
    ctx.fillText(translations[activeLang].statDuplicatesLabel || "Repetidas", 720, 490);
    ctx.fillStyle = '#60a5fa';
    ctx.font = "bold 26px Outfit, Inter, sans-serif";
    ctx.fillText(duplicateCount.toString(), 720, 525);
    
    drawRoundedRect(ctx, 80, 595, 920, 310, 24, "rgba(96, 165, 250, 0.02)", "rgba(96, 165, 250, 0.12)");
    
    ctx.fillStyle = '#60a5fa';
    ctx.font = "bold 22px Outfit, Inter, sans-serif";
    ctx.fillText((translations[activeLang].statDuplicatesLabel || "Repetidas").toUpperCase(), 120, 645);
    
    const duplicatesText = getGroupedStickersText(2);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = "500 18px Inter, sans-serif";
    if (duplicatesText) {
        wrapText(ctx, duplicatesText, 120, 685, 840, 30, 6);
    } else {
        ctx.fillStyle = '#a0aec0';
        ctx.fillText(translations[activeLang].shareImageNoDuplicates || "Ninguna figurita repetida.", 120, 685);
    }
    
    drawRoundedRect(ctx, 80, 930, 920, 310, 24, "rgba(248, 113, 113, 0.02)", "rgba(248, 113, 113, 0.12)");
    
    ctx.fillStyle = '#f87171';
    ctx.font = "bold 22px Outfit, Inter, sans-serif";
    ctx.fillText((translations[activeLang].statMissingLabel || "Faltan").toUpperCase(), 120, 980);
    
    ctx.fillStyle = '#e2e8f0';
    ctx.font = "500 18px Inter, sans-serif";
    if (missingCount === 0) {
        ctx.fillStyle = '#34d399';
        ctx.fillText(translations[activeLang].shareImageNoMissing || "¡Álbum completo! Ninguna figurita faltante.", 120, 1020);
    } else if (missingCount > 150) {
        ctx.fillStyle = '#a0aec0';
        wrapText(ctx, translations[activeLang].shareImageTooManyMissing || "Demasiadas figuritas faltantes para listar. ¡Usa el enlace del álbum para ver la lista completa!", 120, 1020, 840, 28, 5);
    } else {
        const missingText = getGroupedStickersText(0);
        if (missingText) {
            wrapText(ctx, missingText, 120, 1020, 840, 30, 6);
        } else {
            ctx.fillStyle = '#a0aec0';
            ctx.fillText(translations[activeLang].shareImageNoMissing || "¡Álbum completo! Ninguna figurita faltante.", 120, 1020);
        }
    }
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.moveTo(80, 1265);
    ctx.lineTo(1000, 1265);
    ctx.stroke();
    
    ctx.fillStyle = '#718096';
    ctx.font = "600 16px Inter, sans-serif";
    ctx.textAlign = 'center';
    
    const pageURL = window.location.origin + window.location.pathname;
    const footerText = activeLang === 'es' 
        ? `Sigue mi progreso en tiempo real: ${pageURL}`
        : (activeLang === 'pt' 
            ? `Acompanhe meu progresso em tempo real: ${pageURL}`
            : (activeLang === 'it' 
                ? `Segui i miei progressi in tempo reale: ${pageURL}`
                : `Follow my progress in real-time: ${pageURL}`));
    
    wrapText(ctx, footerText, 540, 1295, 900, 22, 2);
    ctx.textAlign = 'left';
    
    try {
        if (shareCanvasPreview) {
            shareCanvasPreview.src = shareCanvas.toDataURL('image/png');
            shareCanvasPreview.style.display = 'block';
        }
        if (shareCanvas) {
            shareCanvas.style.display = 'none';
        }
        const noticeEl = document.getElementById('local-security-notice');
        if (noticeEl) noticeEl.style.display = 'none';
    } catch (e) {
        console.warn("toDataURL failed (likely due to local file:// security policy):", e);
        if (shareCanvas) {
            shareCanvas.style.display = 'block';
        }
        if (shareCanvasPreview) {
            shareCanvasPreview.style.display = 'none';
        }
        const noticeEl = document.getElementById('local-security-notice');
        if (noticeEl) {
            noticeEl.style.display = 'block';
            noticeEl.textContent = translations[activeLang].localSecurityNotice;
        }
    }
}

function downloadShareImage() {
    if (!shareCanvas) return;
    try {
        const dataURL = shareCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        const cleanUsername = username ? username.replace(/[^a-zA-Z0-9]/g, '_') : 'album';
        link.download = `FWC2026_${cleanUsername}_progress.png`;
        link.href = dataURL;
        link.click();
    } catch (err) {
        console.error("Error downloading image:", err);
        showToast(translations[activeLang].toastCopyImageError);
    }
}

function copyShareImageToClipboard() {
    if (!shareCanvas) return;
    try {
        const promise = new Promise((resolve, reject) => {
            shareCanvas.toBlob(blob => {
                if (blob) resolve(blob);
                else reject(new Error("Blob generation failed"));
            }, "image/png");
        });
        
        const item = new ClipboardItem({ "image/png": promise });
        navigator.clipboard.write([item]).then(() => {
            showToast(translations[activeLang].toastCopyImageSuccess);
        }).catch(err => {
            console.error("Clipboard copy failed:", err);
            showToast(translations[activeLang].toastCopyImageError);
        });
    } catch (err) {
        console.error("Error copying to clipboard:", err);
        showToast(translations[activeLang].toastCopyImageError);
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

window.addEventListener('DOMContentLoaded', init);
