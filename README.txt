=====================================================================
 YOUR PERSONAL WEBSITE — README
=====================================================================

WHAT YOU HAVE
-------------
A complete 12-page personal website, built with plain HTML/CSS/JS —
no software, no build tools, no coding experience required to edit it.

  index.html      Home
  about.html      About Me
  story.html      My Story
  education.html  Education
  career.html     Career / Work Experience
  skills.html     Skills & Certifications
  projects.html   Projects & Research
  gallery.html    Photo Gallery + Hobbies/Travel/Community
  blog.html       Blog list
  contact.html    Contact form + direct contact info
  faq.html        FAQ
  privacy.html    Privacy Policy

  css/style.css   All styling — change colors/fonts here once, and it
                  updates across every page.
  js/script.js    Powers the mobile menu button. Leave as-is.
  images/         Where your photos go (see PUT_YOUR_PHOTOS_HERE.txt inside).
  resume/         Where your Resume.pdf / Portfolio.pdf go.


STEP 1 — EDIT THE TEXT
-----------------------
Every page is full of placeholders that look like this:
    [EDIT ME: Your Full Name]

To edit:
  1. Right-click any .html file → Open with → Notepad
     (or Notepad++/VS Code if you have them — easier to read, but
     plain Notepad works fine).
  2. Use Ctrl+H (Find & Replace) to quickly replace repeated items —
     e.g. replace every "[EDIT ME: Your Name]" with your actual name
     in one go, since it appears in the header/footer of every page.
  3. Save the file (Ctrl+S), then double-click the .html file to open
     it in your browser and see the change.

Repeat this file by file. There's no need to touch anything in
css/style.css or js/script.js unless you want to change colors/fonts.


STEP 2 — ADD YOUR PHOTOS
--------------------------
See images/PUT_YOUR_PHOTOS_HERE.txt for the exact folder/filename for
every photo slot (profile photo, gallery categories, project screenshots).
Just save your image files into those folders with matching names —
no HTML editing required. To add MORE photos than the template has
slots for, copy/paste an existing <figure> or <img> block in the HTML
and point it at your new file name.


STEP 3 — ADD YOUR RESUME
--------------------------
See resume/PUT_YOUR_FILES_HERE.txt.
Save your résumé as resume/Resume.pdf and your portfolio as
resume/Portfolio.pdf — the download buttons on the Home, Career, and
Contact pages will work automatically.


STEP 4 — MAKE THE CONTACT FORM ACTUALLY SEND EMAILS
------------------------------------------------------
A plain HTML file can't send email on its own — you need a free form
backend. Easiest option: Formspree.

  1. Go to https://formspree.io and sign up (free plan is enough).
  2. Create a new form — it gives you a URL like:
       https://formspree.io/f/abcd1234
  3. Open contact.html in Notepad, find this line:
       <form action="https://formspree.io/f/EDIT-ME-FORM-ID" method="POST">
     and replace EDIT-ME-FORM-ID with your real form ID.
  4. Save. Messages submitted through your Contact page will now
     arrive in your email inbox.

(Alternative: skip this and just rely on the "Email" and "LinkedIn"
direct links already on the Contact page — totally fine if you'd
rather not set up a form service.)


STEP 5 — GO LIVE (FREE HOSTING)
----------------------------------
Two easy, free options. Either works well for a personal site.

OPTION A — GitHub Pages (recommended, most people use this)
  1. Create a free account at https://github.com if you don't have one.
  2. Create a new repository (e.g. named "my-website").
  3. Upload this entire folder's contents into that repository
     (drag-and-drop works on github.com, or use GitHub Desktop).
  4. In the repository, go to Settings → Pages.
  5. Under "Source", choose the "main" branch and "/ (root)" folder,
     then Save.
  6. After a minute, GitHub gives you a live URL like:
       https://yourusername.github.io/my-website/
  7. Your site is now live! Every time you push new changes to the
     repository, the live site updates automatically.

OPTION B — Netlify (drag-and-drop, no account setup needed to start)
  1. Go to https://app.netlify.com/drop
  2. Drag this entire website folder into the browser window.
  3. Netlify instantly gives you a live URL (e.g. random-name.netlify.app).
  4. Optional: create a free Netlify account to keep the site
     permanently and set a custom subdomain name.

Both options also support connecting your own custom domain name
later (e.g. yourname.com), if you decide to buy one.


A FEW NOTES
------------
- The whole site works without any server or database — it's just
  HTML/CSS/JS files, so it's simple to host and simple to edit forever.
- Keep the header (nav menu) and footer identical across all pages —
  each one is repeated at the top/bottom of every .html file. If you
  rename a page or add a new one, update the menu in ALL files so it
  stays consistent.
- Want to add a whole new page (e.g. "Publications")? Duplicate an
  existing page like projects.html, rename it, replace its content,
  then add a link to it in the nav menu (and footer) on every page.
- Large, uncompressed photos will slow the site down. Resize/compress
  images before uploading (free tool: https://squoosh.app).

That's it — everything else is placeholder content ready for you to
personalize. Good luck with the launch!
