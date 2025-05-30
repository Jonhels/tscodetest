# Code Test – Jon Helge

Dette er en liten frontend-app som demonstrerer tre funksjoner implementert i TypeScript. Jeg har laget en enkel UI i React (med Tailwind CSS) slik at man kan teste dem direkte i nettleseren.

## 🔗 Live-versjon

https://diricodingtest-production.up.railway.app/

---

## Hva funksjonene gjør

### 1. Deepest Letter
Tar inn en streng og finner den første lille bokstaven (`a`–`z`) som ligger lengst inne i parentesene. Returnerer `null` hvis input er ugyldig.

**Eksempel:**  
`a(b)((c)d)e` → `c`

---

### 2. ASCII Art Targets
Tar en liste med koordinater og tegner et 7x7 ASCII-rutenett. Hver punkt markeres med `O`, og det tegnes linjer ut fra hvert punkt (loddrett og vannrett). Hvis linjene krysser, vises `+`.

**Eksempel input:**  
`[{ "x": 2, "y": 2 }, { "x": 4, "y": 4 }]`

---

### 3. Evenly Spaced Hashes
Returnerer en streng av gitt lengde der `#` er jevnt fordelt med mellomrom. Starter og slutter alltid med `#`.

**Eksempel:**  
Input: `9` → `# # # # #`

---

## Teknisk

- React + TypeScript
- Tailwind CSS
- Vite
- Alt ligger i `src/utils/codeTests.ts` og brukes via `App.tsx`
