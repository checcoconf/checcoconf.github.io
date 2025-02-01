#!/bin/bash

echo "🔨 Avvio della build..."
npm run build

# Controlla se la build ha avuto successo
if [ $? -eq 0 ]; then
    echo "✅ Build completata con successo!"
    echo "🚀 Deploy in corso su GitHub Pages..."
    npm run deploy

    if [ $? -eq 0 ]; then
        echo "🎉 Deploy completato con successo!"
    else
        echo "❌ Errore durante il deploy!"
    fi
else
    echo "❌ Errore durante la build! Deploy annullato."
fi
