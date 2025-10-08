# How to Add Academic Documents (Marksheet & Certificate)

## Steps to Add Your PDFs:

### 1. Prepare Your Documents
- **Marksheet PDF**: Your academic marksheet
- **Certificate PDF**: Your degree/course certificate
- Both files should be in PDF format

### 2. Add PDFs to Project
Copy your PDF files to the `src/assets` folder:

```
portfolio-suyog/
├── src/
│   └── assets/
│       ├── marksheet.pdf    ← PUT YOUR MARKSHEET HERE
│       ├── certificate.pdf  ← PUT YOUR CERTIFICATE HERE
│       └── image.png
```

### 3. File Names
The code expects these exact file names:
- `marksheet.pdf` - for your marksheet
- `certificate.pdf` - for your certificate

### 4. If You Want Different Names
If your files have different names, update the imports in `src/components/Resume.jsx` (lines 2-3):

```javascript
import marksheetPdf from '../assets/your-marksheet-name.pdf';
import certificatePdf from '../assets/your-certificate-name.pdf';
```

## How It Works:

1. Click **"View Marksheet"** → Opens marksheet PDF in a modal overlay
2. Click **"View Certificate"** → Opens certificate PDF in a modal overlay
3. Both open on top of the page with a dark background
4. Click the X button to close

## Example:
If your files are named:
- `my-marksheet.pdf`
- `degree-certificate.pdf`

Update lines 2-3 in `Resume.jsx`:
```javascript
import marksheetPdf from '../assets/my-marksheet.pdf';
import certificatePdf from '../assets/degree-certificate.pdf';
```

That's it! Your documents will open in a beautiful modal viewer! 🎉
