# PANCHINA — versione installabile

Questa cartella contiene l'app pronta per essere messa online. Una volta online,
sull'iPad diventa un'icona vera: si apre a tutto schermo, senza barre di Safari,
e continua a funzionare anche senza rete.

## Cosa c'è dentro

| File | A cosa serve |
|---|---|
| `index.html` | l'app (lavagna + scouting), tutto in un file |
| `manifest.webmanifest` | dice a iPad/Android nome, icona e apertura a tutto schermo |
| `sw.js` | fa funzionare l'app senza rete |
| `icons/` | le icone dell'app |

Vanno caricati **tutti e quattro**, mantenendo la cartella `icons` così com'è.

---

## Metterla online con GitHub Pages (gratis, permanente)

Si fa una volta sola. Servono una decina di minuti.

1. Vai su **github.com** e crea un account gratuito (se non ce l'hai).
2. In alto a destra: **+** → **New repository**.
3. Metti come nome `panchina`, lascia **Public**, e premi **Create repository**.
4. Nella pagina che si apre, clicca **uploading an existing file**.
5. Trascina dentro **tutto il contenuto di questa cartella** — `index.html`,
   `manifest.webmanifest`, `sw.js` e la cartella `icons`.
6. In fondo premi **Commit changes**.
7. Vai su **Settings** (in alto) → **Pages** (menu a sinistra).
8. Sotto *Source* scegli **Deploy from a branch**, ramo **main**, cartella **/ (root)**,
   e premi **Save**.
9. Aspetta uno o due minuti e ricarica: comparirà il tuo indirizzo, del tipo
   `https://TUONOME.github.io/panchina/`

Quell'indirizzo è la tua app.

## Installarla sull'iPad

1. Apri **Safari** sull'iPad (deve essere Safari, non Chrome).
2. Vai all'indirizzo del punto 9.
3. Tocca il pulsante **Condividi** (il quadrato con la freccia in su).
4. Scorri e scegli **Aggiungi a Home**.
5. Dai il nome che vuoi e conferma.

Ora hai l'icona sulla schermata Home. Aprila una volta con la rete attiva: da quel
momento funziona anche senza connessione, in palestra o in trasferta.

## Aggiornarla

Quando ti mando una versione nuova: torna al repository su GitHub, apri `index.html`,
clicca l'icona della matita, cancella tutto e incolla il nuovo contenuto — oppure più
semplicemente **Add file → Upload files** e ricarica `index.html` sovrascrivendolo.

Sull'iPad, la prima volta che apri l'app con la rete attiva ti comparirà in basso un
pulsante verde **«Nuova versione — tocca per aggiornare»**. Non cambia mai niente
sotto le mani mentre stai lavorando: aggiorna solo se lo tocchi tu.

## Alternativa più rapida (senza GitHub)

Su **app.netlify.com/drop** puoi trascinare direttamente questa cartella e ottenere
subito un indirizzo. È più veloce da attivare, ma l'indirizzo è un nome casuale e
serve comunque un account gratuito per non perderlo.

## Due note

- Il repository è pubblico, quindi **il codice dell'app è visibile** a chi conosce
  l'indirizzo. Non è un problema: dentro non c'è nessun dato tuo. Roster, disegni ed
  eventi restano **solo sul tuo iPad**, non vengono mai caricati da nessuna parte.
- I dati vivono nella memoria del browser del dispositivo. Prima di cancellare la
  cronologia di Safari, o se cambi iPad, **esporta** dalla scheda Dati.
