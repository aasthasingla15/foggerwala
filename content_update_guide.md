# Foggerwala Website Content Management Guide

This guide provides step-by-step instructions for non-developers or content managers to update blogs, change the hero videos, and edit the discount/promo banner on the Foggerwala website.

---

## 1. How to Add/Edit Blog Posts

Blog posts are stored in a static JavaScript array inside the code. To add a new blog post:

1. **Prepare the Blog Image**:
   * Save the image you want to use for the blog post (e.g., `termite-guide.png`).
   * Place this image in the `public/images/` folder of the project.

2. **Open the Blogs File**:
   * Open the file [Blogs.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/pages/Blogs.jsx) in a code/text editor (such as VS Code, Notepad++, or any text editor).

3. **Add the New Blog Entry**:
   * Locate the `blogsData` array near the top of the file (starts around line 6).
   * Copy one of the existing blog objects (the blocks wrapped in `{ ... }`) and paste it as a new entry.
   * Edit the fields for your new blog post:
     * **`id`**: A unique number (e.g., if the latest blog is `10`, make this one `11`).
     * **`title`**: The title of the blog post.
     * **`cat`**: The category. It must be one of: `'termites'`, `'prevention'`, `'commercial'`, `'residential'`, or `'technology'`.
     * **`date`**: The date of publication (e.g., `'July 18, 2026'`).
     * **`img`**: The path to your image relative to the public folder (e.g., `'/images/termite-guide.png'`).
     * **`excerpt`**: A short 1-2 sentence preview summary shown on the blogs listing page.
     * **`content`**: An array of paragraphs. Each paragraph should be enclosed in quotes and separated by a comma.

   **Example Blog Entry:**
   ```javascript
   { 
     id: 11, 
     title: 'Our Guide to Anti-Termite Treatments', 
     cat: 'termites', 
     date: 'July 18, 2026', 
     img: '/images/termite-guide.png', 
     excerpt: 'A comprehensive guide to understanding pre-construction and post-construction termite control treatments.',
     content: [
       'Paragraph 1 goes here. Explain the details of pre-construction treatments.',
       'Paragraph 2 goes here. Detail post-construction treatments.',
       'Paragraph 3 goes here. Explain how Foggerwala guarantees termite eradication.'
     ]
   },
   ```

4. **Save the File**.

---

## 2. How to Update or Generate Hero Videos

The Home page displays two videos: a wide 16:9 version for desktop screens and a vertical 9:16 version for mobile devices.

### Option A: Replacing with your own custom MP4 videos
If you already have pre-made videos:
1. Rename your widescreen video to **`desktop_hero.mp4`**.
2. Rename your vertical video to **`mobile_hero.mp4`**.
3. Place these files inside the **`public/`** folder of the website, replacing the old files of the same names.

### Option B: Generating videos using the built-in generator
If you want to generate a new video using the project's automatic slideshow tool:
1. Open the file **`video_generator.html`** (located in the project root directory) in Google Chrome or any modern web browser.
2. Under the status banner, click:
   * **"Generate & Download Desktop Video (16:9)"**
   * **"Generate & Download Mobile Video (9:16)"**
3. Once generated, the browser will automatically download the files (as `desktop_hero.mp4` and `mobile_hero.mp4`).
4. Copy these newly downloaded files from your computer's `Downloads` folder into the project's **`public/`** folder.

---

## 3. How to Update the Discount Promo Offer Banner

The banner at the very top of the website displays current active discounts.

1. **Open the Navbar File**:
   * Open the file [Navbar.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/components/Navbar.jsx) in your text editor.

2. **Locate the Promo Banner Text**:
   * Scroll down to the template section around lines 38-46:
     ```jsx
     {showPromo && (
       <div className={styles.promoBanner}>
         <span>🎉 Special Offer: Get <strong>10% Off</strong> on your first termite or pest service!</span>
         <Link to="/contact" onClick={() => setShowPromo(false)}>Claim Discount</Link>
         <button className={styles.promoClose} onClick={() => setShowPromo(false)} aria-label="Dismiss banner">
           <X size={15} />
         </button>
       </div>
     )}
     ```

3. **Modify the Text**:
   * Change the text inside the `<span>...</span>` tag. You can change `10% Off` or change the entire promotion details.
   * If you wish to change the link text, edit `Claim Discount` inside the `<Link ...>` tag.

4. **Save the File**.

---

## 4. How to Deploy the Changes Live

After updating the files, you must build and deploy the application:

1. **Open terminal** in the project directory.
2. Run the command to compile the code for production:
   ```bash
   npm run build
   ```
3. Upload the generated **`dist/`** directory to your web server/hosting provider (e.g. Vercel, Netlify, or Hostinger). If the project is connected to a GitHub repository with auto-deployments, simply commit and push the changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
