# Visual Portfolio - Customization Guide

Welcome! This guide will help you personalize your portfolio website by changing colors, links, images, and other details.

---

## 🎨 Table of Contents
1. [Colors & Theme](#colors--theme)
2. [Text & Content](#text--content)
3. [Links & Navigation](#links--navigation)
4. [Resume & Download CV](#resume--download-cv)
5. [Images & Assets](#images--assets)
6. [Projects Section](#projects-section)
7. [Skills & Experience](#skills--experience)
8. [Contact Information](#contact-information)

---

## 🎨 Colors & Theme

### Understanding the Color System

The portfolio uses a **dark futuristic theme** with neon accents. Colors are defined in [client/src/index.css](client/src/index.css) as CSS custom properties (variables).

### Main Colors (HSL Format)

Located at the top of [client/src/index.css](client/src/index.css) in the `:root` selector:

```css
/* Background Colors */
--background: 240 10% 4%;         /* Almost black background */
--card: 240 10% 6%;               /* Slightly lighter for cards */
--foreground: 0 0% 98%;           /* White text */

/* Accent Colors */
--primary: 260 100% 60%;          /* Neon Purple (main brand color) */
--secondary: 190 100% 50%;        /* Cyan/Electric Blue */
--accent: 320 100% 55%;           /* Hot Pink */

/* Other Colors */
--muted: 240 5% 15%;              /* Muted text color */
--border: 240 5% 15%;             /* Border color */
--destructive: 0 84% 60%;         /* Error/delete color (red) */
```

### How to Change Colors

Colors use **HSL (Hue, Saturation, Lightness)** format:
- **Hue**: 0-360° (color wheel)
- **Saturation**: 0-100% (intensity)
- **Lightness**: 0-100% (brightness)

**Example: Change Primary Color from Purple to Orange**

1. Open [client/src/index.css](client/src/index.css)
2. Find `--primary: 260 100% 60%;` (line ~50)
3. Replace with `--primary: 30 100% 55%;` (orange hue is ~30°)
4. Save and see the change instantly when running `npm run dev`

### HSL Color Reference

| Color | Hue | Example Values |
|-------|-----|-----------------|
| Red | 0° | `0 100% 50%` |
| Orange | 30° | `30 100% 50%` |
| Yellow | 60° | `60 100% 50%` |
| Green | 120° | `120 100% 50%` |
| Cyan | 180° | `180 100% 50%` |
| Blue | 240° | `240 100% 50%` |
| Purple | 270° | `270 100% 50%` |
| Pink | 320° | `320 100% 50%` |

### Quick Theme Changes

**Dark Mode (Default)**
- Already configured ✓

**Change from Dark to Light Mode**
1. Open [client/src/index.css](client/src/index.css)
2. Modify the `:root` values:
   ```css
   --background: 0 0% 98%;        /* Light background */
   --foreground: 240 10% 4%;      /* Dark text */
   ```

---

## ✍️ Text & Content

### Hero Section
Edit [client/src/components/sections/Hero.tsx](client/src/components/sections/Hero.tsx):

```tsx
// Change the title
<h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-4 leading-none">
  ALEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MORGAN</span>
</h1>

// Change the subtitle
<p className="text-lg md:text-2xl text-muted-foreground font-heading max-w-2xl mx-auto mb-10 tracking-wide">
  Crafting immersive digital experiences at the intersection of design and code.
</p>

// Change the badge text
<span className="inline-block py-1.5 px-4 rounded-full border border-primary/30 bg-primary/20 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-white mb-6 neon-box">
  Portfolio 2026  {/* Change this */}
</span>
```

### About Section
Edit [client/src/components/sections/About.tsx](client/src/components/sections/About.tsx):

```tsx
// Change the heading
<h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
  Behind the <span className="text-accent">Pixel</span>
</h2>

// Change bio paragraphs
<p>
  I am a multidisciplinary designer based in Neo-Tokyo, obsessed with the details that bridge the gap between human intuition and machine logic.
</p>

// Update location in terminal output
<div className="text-muted-foreground pl-4">
  "San Francisco, CA"  {/* Change this */}
</div>
```

### Update Skills

In [client/src/components/sections/About.tsx](client/src/components/sections/About.tsx), find and modify:

```tsx
const skills = [
  "Product Design", "UI/UX", "Interaction Design", 
  "Framer Motion", "React", "WebGL", "3D Modeling"
  // Add or remove skills here
];
```

---

## 🔗 Links & Navigation

### Navigation Menu
Edit [client/src/components/layout/Navbar.tsx](client/src/components/layout/Navbar.tsx):

```tsx
const navLinks = [
  { name: "About", href: "#about" },      // Links to sections by ID
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
  // Add new links here
];
```

### Section IDs

Sections are linked using HTML `id` attributes. They appear in:
- [client/src/pages/Home.tsx](client/src/pages/Home.tsx) - Controls which sections appear and order
- [client/src/components/sections/](client/src/components/sections/) - Each section file

**Section IDs used:**
- `#about` → About section
- `#work` → Projects section
- `#journey` → Journey/Timeline section
- `#contact` → Contact section

### Add a New Section Link

1. Create/ensure your section has an `id`:
   ```tsx
   <section id="new-section" className="...">
   ```

2. Add to navbar in [client/src/components/layout/Navbar.tsx](client/src/components/layout/Navbar.tsx):
   ```tsx
   { name: "New Section", href: "#new-section" },
   ```

3. Import and add the section to [client/src/pages/Home.tsx](client/src/pages/Home.tsx):
   ```tsx
   import NewSection from "@/components/sections/NewSection";
   
   export default function Home() {
     return (
       <div>
         <Navbar />
         <main>
           <Hero />
           <About />
           <Projects />
           <NewSection />  {/* Add here */}
           <Journey />
           <Contact />
         </main>
       </div>
     );
   }
   ```

---

## � Resume & Download CV

### Adding a Resume Button to Navbar

You can add a "Resume" button to the navbar that links to or downloads your CV.

#### Step 1: Prepare Your CV File

1. Create a PDF file of your resume/CV
2. Save it as `resume.pdf` or `cv.pdf` in [client/public/](client/public/) directory (create the folder if it doesn't exist)

**Directory structure:**
```
client/
├── public/
│   ├── resume.pdf          ← Your CV file
│   └── cv.pdf              ← Alternative name
├── src/
└── index.html
```

#### Step 2: Add Resume Button to Navbar

Edit [client/src/components/layout/Navbar.tsx](client/src/components/layout/Navbar.tsx):

**Option A: Link to View in Browser**
```tsx
{/* Add this inside the desktop nav links */}
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
>
  Resume
</a>
```

**Option B: Direct Download**
```tsx
<a
  href="/resume.pdf"
  download="Your-Name-Resume.pdf"
  className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
>
  Resume
</a>
```

The `download` attribute will save it with a specific filename instead of opening it.

#### Step 3: Add Resume Button with Styling (Optional)

For a more prominent button with styling:

```tsx
<a
  href="/resume.pdf"
  download="Your-Name-Resume.pdf"
  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase hover:bg-primary/90 transition-colors"
>
  Download Resume
</a>
```

### Adding Download CV Button in Contact Section

Add a download button to the contact section so visitors can get your CV from there too.

#### Step 1: Edit Contact Section

Edit [client/src/components/sections/Contact.tsx](client/src/components/sections/Contact.tsx):

Find the contact section content and add a download button. Here's an example structure:

```tsx
import { Download } from "lucide-react";  // Import download icon

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">
          Let's Connect
        </h2>
        
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to work together or just want to chat? Feel free to reach out.
          </p>
          
          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download="Your-Name-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors mb-8"
          >
            <Download size={20} />
            Download CV
          </a>

          {/* Email Section */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">Email me at:</p>
            <a
              href="mailto:your-email@example.com"
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              your-email@example.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Complete Setup Checklist for CV/Resume

1. **Prepare PDF:**
   - [ ] Create or export your resume/CV as PDF
   - [ ] Name it `resume.pdf` or `cv.pdf`

2. **Create public folder:**
   - [ ] Create `client/public/` folder if it doesn't exist
   - [ ] Place PDF file inside: `client/public/resume.pdf`

3. **Update Navbar:**
   - [ ] Open [client/src/components/layout/Navbar.tsx](client/src/components/layout/Navbar.tsx)
   - [ ] Add Resume link to navbar (around line 40 with other nav items)
   - [ ] Choose download or view option

4. **Update Contact Section:**
   - [ ] Open [client/src/components/sections/Contact.tsx](client/src/components/sections/Contact.tsx)
   - [ ] Add download button with `<Download />` icon from lucide-react
   - [ ] Update email address
   - [ ] Update social media links

5. **Test:**
   - [ ] Run `npm run dev`
   - [ ] Click Resume button in navbar - should open/download PDF
   - [ ] Click Download CV in contact - should download with custom filename
   - [ ] Verify links work correctly

### Important Notes

- **File Path**: The path `/resume.pdf` refers to `client/public/resume.pdf`
- **Build Time**: When you run `npm run build`, files in `client/public/` are automatically copied to the build output
- **Download Attribute**: The `download` attribute triggers a download instead of opening the PDF
- **Custom Filename**: Use `download="Your-Name-Resume.pdf"` to set the downloaded filename

### Troubleshooting

**Q: PDF not loading/downloading?**
- A: Make sure the file exists at `client/public/resume.pdf`
- A: Check the dev server is running (`npm run dev`)
- A: Hard refresh browser (Ctrl+Shift+R)

**Q: File opens instead of downloads?**
- A: Add the `download` attribute to the link: `download="filename.pdf"`

**Q: Wrong filename when downloading?**
- A: Update the `download` attribute with your desired filename

---

## �🖼️ Images & Assets

### Image Locations

All images are stored in [client/src/assets/](client/src/assets/):

```
client/src/assets/
├── hero-bg.png              # Large background image for Hero section
└── project-placeholder.png  # Default image for project cards
```

### Replace Hero Background

1. Prepare your image (recommended: 1920x1080px or larger, optimized for web)
2. Save it as `hero-bg.png` in [client/src/assets/](client/src/assets/)
3. The Hero section will automatically use it

Current location: [client/src/components/sections/Hero.tsx](client/src/components/sections/Hero.tsx), line ~5:
```tsx
import heroBg from "@/assets/hero-bg.png";
```

### Replace Project Images

1. Prepare project images (recommended: square format, 1000x1000px+)
2. Save them to [client/src/assets/](client/src/assets/) with descriptive names
3. Update [client/src/components/sections/Projects.tsx](client/src/components/sections/Projects.tsx):

```tsx
// Import your project images at the top
import projectImage1 from "@/assets/project-1.png";
import projectImage2 from "@/assets/project-2.png";
import projectImage3 from "@/assets/project-3.png";
import projectImage4 from "@/assets/project-4.png";

// Then update the projects array
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Your Category",
    image: projectImage1,  // Use your image
    color: "from-blue-500/20 to-purple-500/20"
  },
  // ... more projects
];
```

### Optimizing Images

Use tools like:
- **TinyPNG** (tinypng.com) - PNG/JPG compression
- **Squoosh** (squoosh.app) - Google's image optimization
- **ImageMagick** - Command line optimization

---

## 📦 Projects Section

### Add, Edit, or Remove Projects

Edit [client/src/components/sections/Projects.tsx](client/src/components/sections/Projects.tsx):

```tsx
const projects = [
  {
    id: 1,
    title: "Neon Finance",
    category: "Fintech Dashboard",
    image: projectPlaceholder,
    color: "from-blue-500/20 to-purple-500/20"  // Gradient background
  },
  // Add more projects...
  {
    id: 5,
    title: "My New Project",
    category: "Web Application",
    image: projectImage5,
    color: "from-green-500/20 to-emerald-500/20"
  },
];
```

### Change Project Card Colors

The `color` field uses Tailwind CSS gradient classes:

**Format:** `from-[COLOR]-500/20 to-[COLOR]-500/20`

Common Tailwind colors:
- `red`, `orange`, `yellow`, `green`, `emerald`, `teal`, `cyan`, `blue`, `indigo`, `purple`, `pink`, `rose`

**Examples:**
```tsx
color: "from-red-500/20 to-orange-500/20"        // Red to Orange
color: "from-cyan-500/20 to-blue-500/20"         // Cyan to Blue
color: "from-purple-500/20 to-pink-500/20"       // Purple to Pink
```

### Link Projects to URLs

Find the project card rendering (around line 60):
```tsx
{projects.map((project) => (
  <motion.a  {/* Change to 'a' tag instead of div */}
    key={project.id}
    href="https://your-project-url.com"  {/* Add this */}
    target="_blank"
    rel="noopener noreferrer"
    className="group cursor-pointer"
    // ... rest of classes
  >
    {/* Project content */}
  </motion.a>
))}
```

---

## 💼 Skills & Experience

### Update Skills List

[client/src/components/sections/About.tsx](client/src/components/sections/About.tsx), line ~7:

```tsx
const skills = [
  "Your Skill 1",
  "Your Skill 2",
  "Your Skill 3",
  "Your Skill 4",
  "Your Skill 5",
  "Your Skill 6",
  "Your Skill 7"
];
```

### Add Work Experience/Journey

Edit [client/src/components/sections/Journey.tsx](client/src/components/sections/Journey.tsx) to add timeline items or experience entries.

---

## 📧 Contact Information

### Update Contact Section

Edit [client/src/components/sections/Contact.tsx](client/src/components/sections/Contact.tsx):

```tsx
// Update email, social links, phone, etc.
// Look for elements containing email addresses or links
```

### Update Social Links

Usually found in:
- [client/src/components/layout/Navbar.tsx](client/src/components/layout/Navbar.tsx) - Header social icons
- [client/src/components/sections/Contact.tsx](client/src/components/sections/Contact.tsx) - Contact section links

Add links like:
```tsx
<a href="https://linkedin.com/in/yourprofile" target="_blank">
  LinkedIn
</a>
<a href="https://github.com/yourprofile" target="_blank">
  GitHub
</a>
<a href="mailto:your@email.com">
  Email
</a>
```

---

## 🚀 Quick Start Checklist

- [ ] Change colors in [index.css](client/src/index.css)
- [ ] Update name and title in [Hero.tsx](client/src/components/sections/Hero.tsx)
- [ ] Update bio and location in [About.tsx](client/src/components/sections/About.tsx)
- [ ] Change skills list
- [ ] Add/edit projects in [Projects.tsx](client/src/components/sections/Projects.tsx)
- [ ] Replace hero background image
- [ ] Replace project images
- [ ] **Add Resume button to Navbar**
- [ ] **Add Download CV button to Contact section**
- [ ] Update contact information
- [ ] Update social media links
- [ ] Test everything by running `npm run dev`

---

## 💡 Tips & Tricks

### Test Changes Locally
```bash
npm run dev
```
Open `http://localhost:5000` in your browser. Changes save instantly!

### Build for Production
```bash
npm run build
```

### Using Tailwind Classes

The portfolio uses Tailwind CSS. Common classes:
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl` - Font sizes
- `text-primary`, `text-secondary`, `text-accent` - Text colors
- `bg-background`, `bg-card` - Background colors
- `rounded-lg`, `rounded-xl` - Border radius
- `px-4`, `py-2` - Padding
- `mb-4`, `mt-6` - Margins

### Fonts

The portfolio uses these Google Fonts:
- **Display**: Orbitron (headings)
- **Heading**: Space Grotesk (subheadings)
- **Body**: Inter (body text)

To change fonts, edit the `@theme` section in [index.css](client/src/index.css).

---

## 🆘 Troubleshooting

**Q: Colors not changing?**
- A: Make sure you saved the file and the dev server is running. Hard refresh your browser (Ctrl+Shift+R).

**Q: Images not showing?**
- A: Check the image path is correct in the import statement and file exists in [client/src/assets/](client/src/assets/).

**Q: Changes not appearing?**
- A: Stop the dev server (Ctrl+C) and run `npm run dev` again.

---

## 📚 Resources

- **Tailwind CSS Colors**: https://tailwindcss.com/docs/customizing-colors
- **HSL Color Picker**: https://www.0to255.com/hsl
- **Icon Library** (Lucide): https://lucide.dev/
- **Animation Library** (Framer Motion): https://www.framer.com/motion/

---

Enjoy customizing your portfolio! 🎨✨
