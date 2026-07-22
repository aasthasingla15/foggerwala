# Foggerwala Website Content Management & Update Guide

This guide provides step-by-step instructions for non-developers or content managers to update products, services, blogs, hero videos, discount promo banners, and contact information on the Foggerwala website.

---

## Table of Contents
1. [General Workflow](#general-workflow)
2. [How to Add/Edit Products](#1-how-to-addedit-products)
3. [How to Add/Edit Services](#2-how-to-addedit-services)
4. [How to Add/Edit Blog Posts](#3-how-to-addedit-blog-posts)
5. [How to Update or Generate Hero Videos](#4-how-to-update-or-generate-hero-videos)
6. [How to Update the Discount Promo Offer Banner](#5-how-to-update-the-discount-promo-offer-banner)
7. [Adding/Updating Images & Assets](#6-addingupdating-images--assets)
8. [Updating Contact Info & Phone Numbers](#7-updating-contact-info--phone-numbers)
9. [How to Deploy the Changes Live](#8-how-to-deploy-the-changes-live)

---

## General Workflow
To update any content on the website:
1. Locate the file in the `src/pages/` or `src/components/` folder.
2. Edit the content array or text inside that file.
3. If you have new images, place them in the project root directory.
4. Run the sync and push script in your terminal:
   ```powershell
   .\sync_and_push.ps1
   ```
5. The live website will update automatically on GitHub and Vercel.

---

## 1. How to Add/Edit Products
Product data is stored in the [Products.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/pages/Products.jsx) file.

* **File Location**: `src/pages/Products.jsx`
* **Data Structure**: Find the `productsData` array near the top of the file (starts around line 7).
* **To Edit/Add a Product**:
  Follow this format to add a new item to the list:
  ```javascript
  { 
    id: 43, // Make sure this is a unique number
    title: 'New Product Name', 
    cat: 'chemicals', // Can be 'chemicals', 'equipment', or 'safety'
    img: '/images/new_product_image.png', 
    features: ['Feature 1', 'Feature 2', 'Feature 3'] 
  }
  ```

---

## 2. How to Add/Edit Services
Service data is stored in the [Services.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/pages/Services.jsx) file.

* **File Location**: `src/pages/Services.jsx`
* **Data Structure**: Find the `servicesData` array near the top of the file (starts around line 7).
* **To Edit/Add a Service**:
  ```javascript
  { 
    id: 25, // Make sure this is a unique number
    title: 'New Service Name', 
    cat: 'residential', // Can be 'residential', 'commercial', or 'industrial'
    img: '/images/new_service_image.png', 
    icon: <Shield />, // Choose from Shield, Activity, Droplet, Bug, Zap, Eye
    desc: 'Brief description of the service.' 
  }
  ```

---

## 3. How to Add/Edit Blog Posts
Blog posts are stored in the [Blogs.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/pages/Blogs.jsx) file.

* **File Location**: `src/pages/Blogs.jsx`
* **Data Structure**: Find the `blogsData` array near the top of the file (starts around line 6).
* **To Add/Edit a Blog Entry**:
  Copy one of the existing blog objects (the blocks wrapped in `{ ... }`) and paste it as a new entry:
  ```javascript
  { 
    id: 11, // A unique number
    title: 'Our Guide to Anti-Termite Treatments', 
    cat: 'termites', // Must be one of: 'termites', 'prevention', 'commercial', 'residential', or 'technology'
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

---

## 4. How to Update or Generate Hero Videos
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

## 5. How to Update the Discount Promo Offer Banner
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

---

## 6. Adding/Updating Images & Assets
Images used for products, services, or pages need to be copied into the project.

1. Put your new image file (e.g. `my_new_product.png`) directly in the **main project folder** (where you see other image files).
2. Update the `img` path in `Products.jsx`, `Services.jsx`, or `Blogs.jsx` to: `'/images/my_new_product.png'`.
3. When you run `.\sync_and_push.ps1`, the script will automatically:
   * Copy the image to the correct `public/images/` directory.
   * Stage and push the images and edits to GitHub.

---

## 7. Updating Contact Info & Phone Numbers
To update phone numbers, emails, addresses, or helpdesk details:

* **Contact Page**: Edit the cards inside [Contact.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/pages/Contact.jsx).
* **Footer**: Edit [Footer.jsx](file:///c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg/src/components/Footer.jsx) to update the global footer contact details.

---

## 8. How to Deploy the Changes Live
After updating the files, you must build and deploy the application:

1. Open your terminal in the project directory.
2. Run the sync script:
   ```powershell
   .\sync_and_push.ps1
   ```
   This will automatically commit your changes and force-push them to GitHub, triggering a Vercel build to deploy the website.
