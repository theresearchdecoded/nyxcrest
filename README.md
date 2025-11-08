# NyxCrest Inc. - Corporate Website

A professional, fully-featured corporate website for NyxCrest Inc., a technology company specializing in public safety solutions and predictive analytics.

## 🏢 About NyxCrest

NyxCrest Inc. is a technology company dedicated to creating safer communities through innovative predictive analytics and smart city solutions. Our flagship product, CityWatch, has achieved remarkable results, including a 40% reduction in street crime in the City of Veritas.

**Tagline:** Safety Through Vigilance

## 📁 Project Structure

```
nyxcrest/
├── index.html          # Homepage with hero section and overview
├── about.html          # Company mission, vision, values, and history
├── team.html           # Leadership team and advisory board
├── solutions.html      # Product offerings and capabilities
├── news.html           # Press releases and success stories
├── contact.html        # Contact form and office information
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive features and form handling
├── LICENSE             # Project license
└── README.md           # This file
```

## ✨ Features

### Pages

1. **Homepage (index.html)**
   - Hero section with call-to-action
   - Key statistics showcase
   - Company overview
   - Solutions preview
   - Veritas success story
   - Newsletter signup

2. **About Us (about.html)**
   - Mission and vision statements
   - Core values
   - Company history timeline
   - Community First portfolio
   - "Safety Through Vigilance" philosophy

3. **Meet Our Team (team.html)**
   - Executive leadership profiles
   - CEO Marcus Thorne featured bio
   - Advisory board members
   - Career opportunities section

4. **Solutions (solutions.html)**
   - CityWatch flagship product (detailed)
   - SmartCity Platform
   - Emergency Response Hub
   - Community Safety Analytics
   - Implementation process

5. **News & Press (news.html)**
   - Featured Veritas success story (full article)
   - Recent news announcements
   - Press releases
   - Media kit download
   - Newsletter subscription

6. **Contact (contact.html)**
   - Multi-field contact form
   - Department directory
   - Regional office locations
   - Office hours
   - FAQ section

### Design Features

- **Modern, Professional Aesthetic**: Clean corporate design with navy blue and light blue color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML and proper ARIA labels
- **Interactive Elements**: 
  - Animated statistics counters
  - Smooth scrolling
  - Fade-in animations on scroll
  - Mobile navigation menu
  - Form validation
  - Back-to-top button

### Technical Features

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Google Fonts integration (Inter font family)
- CSS Grid and Flexbox for layouts
- CSS custom properties (variables) for easy theming
- Intersection Observer API for scroll animations
- Form validation and handling
- Mobile-responsive navigation

## 🎨 Color Scheme

```css
Primary Navy:     #1a365d
Primary Dark:     #0f2642
Primary Light:    #2d4a7c
Accent Blue:      #3182ce
Accent Hover:     #2c5aa0
Text Dark:        #1a202c
Text Medium:      #4a5568
Text Light:       #718096
Background Light: #f7fafc
Background White: #ffffff
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser

1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser
3. Navigate through the site using the menu

### Option 2: Use a Local Server (Recommended)

Using Python:
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000

# Then open: http://localhost:8000
```

Using VS Code Live Server:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #1a365d;
    --accent-color: #3182ce;
    /* etc. */
}
```

### Adding Content

- **New Team Members**: Add to `team.html` following the existing card structure
- **News Articles**: Add to `news.html` using the news-card template
- **Solutions**: Extend `solutions.html` with new solution-card elements

### Form Submissions

The contact form currently logs to console. To integrate with a backend:

1. Open `script.js`
2. Find the contact form handler
3. Uncomment the `fetch()` API call
4. Replace `/api/contact` with your endpoint

```javascript
fetch('/your-api-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
```

## 📊 Key Statistics Featured

- **40%** reduction in street crime (Veritas)
- **15+** cities partnered nationwide
- **24/7** real-time monitoring
- **99.9%** system uptime

## 👥 Team Leadership

- **Marcus Thorne** - CEO & Co-Founder
- **Dr. Rachel Morrison** - Chief Technology Officer
- **James Chen** - Chief Operating Officer
- **Sarah Kaplan** - Chief Legal Officer
- **Michael Patterson** - Chief Strategy Officer
- **Chief Lisa Park (Ret.)** - Head of Community Relations
- **Dr. Amara Voss** - Chief Data Scientist

## 📧 Contact Information

**Headquarters:**  
1250 Innovation Drive  
Tech District, TC 94105  
United States

**Phone:** +1 (555) 010-0100  
**Email:** info@nyxcrest.com

## 📄 License

See LICENSE file for details.

## 🌟 Highlights

This website showcases:

1. **Authentic Corporate Presence**: Professional design that looks like a real tech company
2. **Comprehensive Content**: Multiple pages with detailed information about products, team, and success stories
3. **Real-World Scenario**: Based on the Veritas CityWatch success story
4. **Modern Web Standards**: Responsive design, accessibility, and performance optimization
5. **Interactive Features**: Forms, animations, and dynamic content
6. **Complete Brand Identity**: Consistent messaging around "Safety Through Vigilance"

## 🔐 Privacy & Security

The website demonstrates best practices for corporate sites:
- Form validation
- Privacy policy links
- Data security messaging
- Compliance mentions (GDPR, SOC 2)

## 📈 Future Enhancements

Potential additions:
- Backend API integration for forms
- Blog section for thought leadership
- Case study download PDFs
- Video testimonials
- Live chat support
- Investor relations page
- Careers portal with job listings

---

**Built with ❤️ for community safety initiatives**

*NyxCrest Inc. - Safety Through Vigilance*
