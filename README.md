# Smart Blog Backend (Express API)

A powerful, production-ready backend for Smart Blog for Developers, built with **Express.js**, **TypeScript**, and **MongoDB Atlas**. This API provides comprehensive features for content management

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Security](#security)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [API Routes](#api-routes)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Docker Deployment](#docker-deployment)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🔐 Authentication & Security
- Secure user authentication using **JWT (JSON Web Tokens)**
- Password hashing with **bcrypt**
- Protected routes with middleware
- CORS policy for secure cross-origin requests
- Cookie-based session management

### 📄 PDF Generation
- Convert content into formatted PDF files using **Puppeteer**
- Download generated PDFs easily
- Automated PDF generation pipeline

### 🖼️ Media Management
- **Cloudinary Integration** for image and video storage
- Secure cloud-based file uploads
- Media optimization and transformation

### 📧 Email Services
- Email notifications using **SendGrid** and **Nodemailer**
- Customizable email templates
- Automated email workflows

### 🤖 AI Integrations
- **Google Gemini AI** for content generation and analysis
- **OpenAI** integration for advanced AI features
- **Hugging Face Inference** for ML model access
- **Voyage AI** for embeddings and semantic search

### 📊 Logging & Monitoring
- Automatic request logging using **Morgan**
- Error handling and tracking
- Activity logging for auditing

### 📱 Image Services
- **Unsplash API** integration for free stock images
- Image management and retrieval

### 🛠️ Admin Panel
- Comprehensive admin routes for system management
- User management capabilities
- Analytics and reporting

---

## 🛠️ Technologies Used

### Backend Framework
- **Express.js** (v5.2.1) - Fast and minimal web framework
- **TypeScript** (v6.0.3) - Type-safe JavaScript

### Database
- **MongoDB Atlas** - Cloud-hosted NoSQL database
- **Mongoose** (v9.0.2) - ODM for MongoDB
- **MongoDB Driver** (v7.0.0) - Native MongoDB client

### Authentication & Security
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcrypt** (v6.0.0) - Password hashing
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **Cookie-parser** (v1.4.7) - Cookie middleware

### File Handling & Storage
- **Multer** (v2.0.2) - File upload middleware
- **Cloudinary** (v2.8.0) - Cloud image and video storage
- **Puppeteer** (v24.34.0) - PDF generation

### Email Services
- **SendGrid** (@sendgrid/mail v8.1.6) - Email delivery
- **Nodemailer** (v7.0.12) - Email client

### AI & ML Services
- **Google Gemini AI** (@google/genai v1.34.0)
- **OpenAI** (v6.15.0)
- **Hugging Face Inference** (@huggingface/inference v4.13.19)
- **Voyage AI** (v0.4.0)

### Utilities
- **dotenv** (v17.2.3) - Environment variable management
- **Body-parser** (v2.2.1) - Request parsing middleware
- **Morgan** (v1.10.1) - HTTP request logger
- **Axios** (v1.13.2) - HTTP client

---

## 🔒 Security

### Authentication
- **JWT Protection** - Protects routes and ensures secure user authentication
- **Bcrypt Hashing** - All passwords are hashed before storage
- **Token Expiration** - Automatic token expiration for security

### CORS Policy
- Restricts unauthorized cross-origin requests
- Configured for safe frontend communication
- Origin whitelist for production

### Environment Variables
- All sensitive data stored in `.env` file
- Never commit secrets to version control
- Support for different environments (.env, .env.local, .env.production)

### Data Security
- MongoDB Atlas encryption at rest
- TLS/SSL encryption in transit
- Non-root Docker user for container security

---

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (Cloud MongoDB)
- **Git** for version control

---

## 🚀 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/namal1230/MERN-BE.git
cd MERN-BE
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/smartblog

# Authentication
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary (Image Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Service (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key

# Email Service (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password

# AI Services
GOOGLE_GENAI_API_KEY=your_google_gemini_key
OPENAI_API_KEY=your_openai_api_key
HUGGINGFACE_API_KEY=your_huggingface_token
VOYAGEAI_API_KEY=your_voyage_ai_key

# Frontend URL
FRONTEND_URL=https://smart-blog-dev.vercel.app
```

### 4. Build TypeScript

```bash
npm run build
```

### 5. Start the Development Server

```bash
npm run dev
```

The server will start at `http://localhost:5000` (or your configured PORT).

---

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 3000) |
| `NODE_ENV` | Environment mode | No (default: development) |
| `MONGO_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes (for image upload) |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes (for image upload) |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes (for image upload) |
| `SENDGRID_API_KEY` | SendGrid API key | Yes (for email) |
| `EMAIL_USER` | Email service username | Yes (for Nodemailer) |
| `EMAIL_PASSWORD` | Email service password | Yes (for Nodemailer) |
| `GOOGLE_GENAI_API_KEY` | Google Gemini API key | No (for AI features) |
| `OPENAI_API_KEY` | OpenAI API key | No (for AI features) |
| `HUGGINGFACE_API_KEY` | Hugging Face token | No (for ML features) |
| `VOYAGEAI_API_KEY` | Voyage AI API key | No (for embeddings) |
| `FRONTEND_URL` | Frontend URL for CORS | No (configured in code) |

---

## 📡 API Routes

### Health Check
```
GET /ping
- Returns: { status: "ok" }
```

### Customer Routes
```
GET/POST/PUT/DELETE /customer
- User profile management
- Account settings
```

### Blog/Posts (Phosts)
```
GET/POST/PUT/DELETE /phosts
- Create and manage blog posts
- Content management
```

### Email Service
```
POST /email
- Send emails
- Email notifications
```

### File Upload
```
POST /api/upload
- Upload files to Cloudinary
- Media storage
```

### Image Search (Unsplash)
```
GET /api/images
- Search for free stock images
- Image discovery
```

### Admin Routes
```
GET/POST/PUT/DELETE /admin
- Admin panel management
- System administration
```
## ▶️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

The API will be accessible at:
- **Development:** http://localhost:5000
---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t smart-blog-backend:latest .
```

### Run Docker Container

```bash
docker run -p 5000:3000 \
  --env-file .env \
  -d smart-blog-backend:latest
```

### Docker Compose (Optional)

Create a `docker-compose.yml`:

```yaml
version: '3.8'

services:
  backend:
    build: .
    ports:
      - "5000:3000"
    env_file:
      - .env
    environment:
      NODE_ENV: production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

#### AWS/Google Cloud/Azure
- Use containerized deployment with Docker
- Set up CI/CD pipelines
- Configure environment variables in cloud console

---

## 🔁 CI/CD Pipeline (Jenkins → Argo CD)

This project follows a CI/CD workflow that builds, scans, and deploys container images and Helm charts. The recommended setup below uses Jenkins for CI (build, test, scan, push) and Argo CD for GitOps-based continuous delivery.

High-level pipeline stages (CI):

1) SonarQube analysis
- Run static code analysis with SonarQube and fail the build if the quality gate fails.
- Example (SonarScanner CLI):

```bash
sonar-scanner \
  -Dsonar.projectKey=smart-blog-backend \
  -Dsonar.sources=src \
  -Dsonar.host.url=${SONARQUBE_URL} \
  -Dsonar.login=${SONARQUBE_TOKEN}
```

2) Docker build image
- Build a versioned Docker image using the commit SHA or tag:

```bash
docker build -t ${IMAGE_NAME}:${GIT_COMMIT} .
```

3) Docker registry push
- Push the image to your Docker registry (Docker Hub, private registry, or ECR). Credentials should be stored securely in your CI (Jenkins credentials/store).

```bash
docker tag ${IMAGE_NAME}:${GIT_COMMIT} ${REGISTRY_URL}/${IMAGE_NAME}:${GIT_COMMIT}
docker push ${REGISTRY_URL}/${IMAGE_NAME}:${GIT_COMMIT}
```

4) AWS ECR (optional)
- For AWS ECR, create the repository and authenticate using the AWS CLI. Example:

```bash
aws ecr create-repository --repository-name ${ECR_REPO} || true
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
docker tag ${IMAGE_NAME}:${GIT_COMMIT} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${GIT_COMMIT}
docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${GIT_COMMIT}
```

5) Trivy image scan
- Scan the built image with Trivy and fail the pipeline on high/critical findings (adjust policy as needed):

```bash
trivy image --severity HIGH,CRITICAL --exit-code 1 ${REGISTRY_URL}/${IMAGE_NAME}:${GIT_COMMIT}
```

6) Kubernetes & Helm chart
- Package and deploy using Helm charts. Keep charts under `./charts/smart-blog-backend` and use a values file per environment.

```bash
helm lint ./charts/smart-blog-backend
helm package ./charts/smart-blog-backend --destination ./helm-packages
helm upgrade --install smart-blog-backend ./charts/smart-blog-backend -f values/production.yaml --namespace smart-blog --create-namespace
```

- Use `imagePullSecrets` or IRSA (EKS) / IAM roles for registry auth in cluster.

7) Prometheus & Grafana
- Expose application metrics (e.g., via Prometheus client) and add ServiceMonitor/PodMonitor manifests for Prometheus Operator.
- Deploy Prometheus & Grafana using the kube-prometheus-stack (Helm chart) and import dashboards for application metrics.

Jenkins CI pipeline (example Jenkinsfile)

```groovy
pipeline {
  agent any
  environment {
    IMAGE_NAME = "smart-blog-backend"
    REGISTRY = "${REGISTRY_URL}"
  }
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install') { steps { sh 'npm ci' } }
    stage('Lint & Test') { steps { sh 'npm run lint && npm test' } }
    stage('SonarQube') { steps { withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) { sh "sonar-scanner -Dsonar.login=${SONAR_TOKEN} ..." } } }
    stage('Build Docker') { steps { sh 'docker build -t ${IMAGE_NAME}:${GIT_COMMIT} .' } }
    stage('Trivy Scan') { steps { sh 'trivy image --severity HIGH,CRITICAL --exit-code 1 ${IMAGE_NAME}:${GIT_COMMIT}' } }
    stage('Push Image') { steps { sh 'docker tag ... && docker push ...' } }
    stage('Publish Helm') { steps { sh 'helm package ./charts/smart-blog-backend && git add ./helm-packages && git commit -m "publish helm" && git push' } }
  }
  post { failure { mail to: 'dev-team@example.com', subject: "Build failed: ${env.JOB_NAME}", body: "Check the Jenkins console for details" } }
}
```

Notes on secrets and credentials
- Store secrets (registry credentials, AWS keys, Sonar token, etc.) in your CI secret store (Jenkins Credentials, Vault, or cloud secret manager). Do NOT hardcode secrets in pipelines or repository files. Use placeholders like `${AWS_ACCESS_KEY_ID}` and `${AWS_SECRET_ACCESS_KEY}`.

CD (GitOps) with Argo CD
- Use Argo CD to continuously deploy Helm charts or Kubernetes manifests from a Git repository. The common flow is:
  1. CI builds image, pushes image to registry, and updates a values file or Helm chart `image.tag` in a `gitops/` repo.
  2. Argo CD is pointed at the `gitops/` repo and auto-syncs the updated chart to the cluster.

Example Argo CD Application manifest (simplified)

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: smart-blog-backend
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/namal1230/MERN-BE-gitops'
    targetRevision: HEAD
    path: charts/smart-blog-backend
    helm:
      valueFiles:
        - values/production.yaml
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: smart-blog
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

Recommended next steps
- Keep Helm chart and GitOps repo in a separate repository (e.g., `MERB-BE-gitops`) that Argo CD watches.
- Add pipeline steps to update the GitOps repo (bump image tag) as the final CI action so ArgoCD picks up the change.
- Add alerts and dashboards in Prometheus/Grafana for key business metrics and error rates.

Security reminder
- Follow the repository security rules: never store secrets in `.env` committed to git. Use CI secret stores and cloud secret managers.

---

## 🧪 Testing

Currently, no test framework is configured. To add tests:

```bash
npm install --save-dev jest @types/jest ts-jest
```

Update `package.json`:
```json
"test": "jest"
```

---

## 📝 Scripts

| Script | Purpose |
|--------|---------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production server |
| `npm run dev` | Run development server with hot reload |
| `npm test` | Run test suite |

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify `MONGO_URI` is correct
- Check MongoDB Atlas firewall rules
- Ensure IP is whitelisted in MongoDB Atlas

### Cloudinary Upload Error
- Verify credentials in `.env`
- Check file size limits
- Ensure CORS is configured

### JWT Authentication Error
- Verify `JWT_SECRET` is set
- Check token expiration
- Validate token in Authorization header

### Port Already in Use
```bash
# Change PORT in .env or
lsof -i :5000        # Find process on port 5000
kill -9 <PID>        # Kill the process
```

---

## 📚 Documentation

- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [JWT Documentation](https://jwt.io)
- [Mongoose Documentation](https://mongoosejs.com)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the **MIT License**. See the LICENSE file for details.

---

## 👤 Author

**Namal** - [@namal1230](https://github.com/namal1230)

---

## 🙏 Acknowledgments

- Express.js community
- MongoDB Atlas
- Cloudinary team
- All open-source contributors

---

## 📧 Support

For support, email: support@smartblog.dev or open an issue on GitHub.

---

**Last Updated:** July 2026 | **Version:** 1.0.0
