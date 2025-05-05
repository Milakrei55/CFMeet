# Meet App

_**Meet** is a progressive web application (PWA) where users can search for events in any city and view event details to help them decide which ones to attend. Built using a test-driven development (TDD) approach and serverless architecture, this app offers offline access, data visualization, and a seamless installable experience._

---

## 🚀 Features

### ✅ Toggle Event Details

**User Story:**  
_As a user, I should be able to toggle the visibility of event details, so that I can either quickly scan the list or dive deeper into specific events._

**Acceptance Criteria:**
- User can expand/collapse event details  
- Default view hides details  
- Details include location, time, and description  

---

### ✅ Customize Number of Events Displayed

**User Story:**  
_As a user, I should be able to choose how many events are displayed in the list, so that I can control the amount of information based on my preferences._  
_As a user, if I do not set a preference, I should see 32 events by default, so that I get a good overview without being overwhelmed._

**Acceptance Criteria:**
- User can specify the number of events  
- Defaults to 32 events  
- List updates based on user input  

---

### ✅ Filter Events by City

**User Story:**  
_As a user, I should be able to search by city and view relevant events, so I can find events near me._

**Acceptance Criteria:**
- Search bar with suggestions  
- Filtered event list upon selection  
- Default shows all cities if no search is made  

---

### ✅ Offline Support

**User Story:**  
_As a user, I should be able to access previously loaded events even when I am offline, so I can still view event details._  
_If I attempt to filter events offline, I should see an error message._

**Acceptance Criteria:**
- Cached events are accessible offline  
- Error message when using filters without internet  
- App remains stable in offline mode  

---

### ✅ Home Screen Shortcut

**User Story:**  
_As a user, I should be able to add the app to my home screen, so that I can access it like a native app._

**Acceptance Criteria:**
- PWA install prompt available  
- Opens in standalone mode  
- Shortcut added to device  

---

### ✅ Data Visualization with Charts

**User Story:**  
_As a user, I should be able to view charts showing event distribution by city and popularity by genre, so that I can make better decisions based on visual trends._

**Acceptance Criteria:**
- Pie chart for genre popularity  
- Scatterplot for event count by city  
- Updates based on user input  

---

## 🧰 Tech Stack

- **Frontend:** React (Create React App)  
- **Architecture:** Serverless (AWS Lambda)  
- **Authentication:** Google Calendar API + OAuth2  
- **PWA Features:** Service workers, offline support, installability  
- **Testing:** TDD with Jest, unit/integration/E2E tests  
- **Data Visualization:** Recharts  
- **Deployment:** GitHub Pages  
- **Monitoring:** Lighthouse, CI/CD, online APM tool  
- **Styling:** Responsive design for all major screen sizes  

---

## 📚 Documentation

- Inline comments and unit tests reflect a Test-Driven Development (TDD) approach
- Project includes user stories and acceptance criteria
- Data visualizations powered by Recharts
- Deployed as a Progressive Web App with installable features

---

## 🌐 Hosting

This project is deployed using **GitHub Pages**. It can be accessed via any modern browser with support for PWA features and offline capabilities.

---

## 🏁 Getting Started

To run this app locally:

1. Clone the repo  
   `git clone https://github.com/Milakrei55/CFMeet.git`
2. Navigate to the project folder  
   `cd CFMeet`
3. Install dependencies  
   `npm install`
4. Start the app  
   `npm start`

Visit `http://localhost:3000/` to use the app locally.

---

## ✍️ Author

Developed by Michaela (Milakrei55) as part of the Full-Stack Immersion Achievement 4.

---

## 🛑 Hard Rules

- Project is for educational and portfolio use only
