# How to Add Your Profile Photo

## Steps to Add Your Photo:

### 1. Prepare Your Photo
- Choose a professional photo of yourself
- Recommended: Square image (e.g., 500x500px or 800x800px)
- Supported formats: JPG, PNG, WEBP

### 2. Add Photo to Project
- Copy your photo file
- Paste it into the `public` folder of your project
  - Location: `portfolio-suyog/public/`
- Rename your photo to: `profile.jpg` (or keep the original name)

### 3. Update the Image Path (if needed)
- Open file: `src/components/Hero.jsx`
- Find line 10:
  ```javascript
  const profilePhoto = '/profile.jpg';
  ```
- If your image has a different name, update it:
  ```javascript
  const profilePhoto = '/your-image-name.jpg';
  ```

## Example:
If your photo is named `suyog.png`:
1. Put `suyog.png` in the `public` folder
2. Update line 10 in `Hero.jsx`:
   ```javascript
   const profilePhoto = '/suyog.png';
   ```

## That's it! 
Your photo will appear in a circular frame with a gradient border on the homepage! 🎉

## File Structure:
```
portfolio-suyog/
├── public/
│   └── profile.jpg  ← PUT YOUR PHOTO HERE
├── src/
│   └── components/
│       └── Hero.jsx  ← UPDATE PATH HERE (line 10)
```
