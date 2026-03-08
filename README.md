<!-- prettier-ignore -->
<div align="center">

<img src="./app/assets/HOUSE-MOVERS-LOGO.png" alt="Shift Masters Logo" align="center" height="100" />

# Shift Masters

**AI-Powered Mobile Platform for Household Relocation Services**

[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-Mobile%20App-blue?style=flat-square&logo=react)](https://reactnative.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-3c873a?style=flat-square&logo=node.js)](https://nodejs.org)

⭐ If you like this project, consider starring it on GitHub!

[Problem Statement](#the-problem-statement) • [Overview](#overview) • [Features](#features) • [Tech Stack](#tech-stack) • [Architecture](#architecture) • [Getting Started](#getting-started)

</div>

---

# The Problem Statement

Relocating to a new home or office can be stressful and disorganized. Most people struggle with coordinating multiple tasks including packing, transportation logistics, and arranging items at the destination.

Common challenges include:

### **Logistics Coordination**
- Difficulty organizing items before relocation
- Limited visibility of transporters during the moving process
- Inefficient scheduling of relocation services

### **Service Quality Monitoring**
- Lack of transparent feedback mechanisms for moving services
- Difficulty assessing the quality of relocation providers
- Limited use of customer feedback to improve services

### **Communication Barriers**
- Poor coordination between clients and moving teams
- Limited real-time updates during relocation

**Shift Masters solves these problems by providing a mobile platform that simplifies relocation planning while using AI-driven sentiment analysis to continuously improve service quality.**

---

# Overview

Shift Masters is a **mobile relocation management platform** built with **React Native** that enables users to easily organize and manage their moving process from start to finish.

The application allows users to **pack items digitally, schedule transportation, track transporters in real time, and organize destination setup** for a seamless relocation experience.

To enhance service quality, the platform integrates **Natural Language Processing (NLP)** for **sentiment analysis on user feedback**, enabling the system to analyze customer satisfaction and identify areas for improvement.

This project demonstrates the integration of **mobile application development, backend API services, real-time location tracking, and AI-based analytics**.

---

# Features

### 📦 Item Packing Management
- Organize and categorize items before relocation
- Maintain digital records of packed belongings

### 🚚 Transportation Scheduling
- Schedule transportation for relocation
- Manage moving timelines efficiently

### 📍 Real-Time Transporter Tracking
- Track the location of transporters using GPS
- Receive real-time updates during the relocation process

### 🏠 Destination Setup
- Plan the arrangement of items at the new location
- Improve coordination between moving teams

### 🤖 AI-Powered Sentiment Analysis
- Analyze user feedback using **Natural Language Processing**
- Automatically evaluate service satisfaction levels
- Provide insights to improve service delivery

### 📊 Service Quality Monitoring
- Collect and analyze customer feedback
- Identify patterns in user experience

---

# Tech Stack

### **Frontend**
- React Native
- Expo
- JavaScript

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB

### **AI / Machine Learning**
- Python
- Natural Language Processing (NLP)
- Sentiment Analysis

### **APIs**
- Google Maps API for real-time location tracking

---

# Architecture

<div align="center">

![Shift Masters Architecture](./docs/architecture.png)

</div>

### **Core Components**

**Mobile Application**
- Built using React Native and Expo
- Provides user interface for managing relocation tasks

**Backend API**
- Node.js and Express.js REST APIs
- Handles user requests, scheduling, and service management

**Database Layer**
- MongoDB stores user data, relocation schedules, and feedback

**AI Processing Layer**
- Python-based NLP engine performs sentiment analysis on user feedback

**Location Services**
- Google Maps API provides real-time tracking and route visualization

---

# Data Flow

1. **User Interaction**
   - User organizes items and schedules relocation through the mobile app

2. **Backend Processing**
   - Node.js API processes relocation data and stores it in MongoDB

3. **Real-Time Tracking**
   - Transporter location is retrieved via Google Maps API

4. **Feedback Collection**
   - Users submit feedback after relocation

5. **Sentiment Analysis**
   - NLP engine analyzes feedback and generates service quality insights

---

# Getting Started

### Prerequisites

- Node.js LTS
- npm or yarn
- MongoDB
- Expo CLI

---

### Clone the Repository

```bash
git clone https://github.com/itskipronoh/shift-masters.git
cd shift-masters

### Install Dependencies
npm install
### Start the Development Server
npm start
### Run the Mobile Application
expo start


# Future Improvements

1. Integration with payment systems (M-Pesa, card payments)

2. Enhanced route optimization algorithms

3. Advanced AI analytics for logistics optimization

4. Multi-city logistics support

#<div align="center">

 Built with ❤️ using React Native and AI

Made by @itskipronoh

</div> ```
