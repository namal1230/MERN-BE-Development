pipeline {
    agent any
    tools{
        jdk 'jdk'
        nodejs 'node25'
    }
    environment{
        DOCKER_HUB_REPO = 'namaldil/saas-backend'
        scannerHome = tool 'SonarScanner'
        AWS_DEFAULT_REGION = 'ap-south-1'
        AWS_ACCOUNT_ID = 
    }
    stages {
        stage('Clean workspace') {
            steps{
                cleanWs()
            }
        }
        stage('SCM Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/namal1230/MERN-BE'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                        bat """
                            ${scannerHome}\\bin\\sonar-scanner -Dsonar.projectName=SaaS_backend -Dsonar.projectKey=sonar-token
                        """
                }
            }
        }
        stage('Build') {
            steps {
                bat """
                npm install
                """
            }
        }
        stage('Trivy FS Scan') {
            steps {
                bat """
                trivy fs . > trivyfs.txt
                """
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_HUB_REPO}:latest")
                }
            }
        }
        stage('Trivy Scan') {
            steps {
                bat """
                trivy image --severity HIGH,CRITICAL --format template --template "@contrib/html.tpl" ^
                -o trivy-report.html ${DOCKER_HUB_REPO}:latest
                
                trivy image --severity HIGH,CRITICAL --exit-code 1 ${DOCKER_HUB_REPO}:latest
                """
            }
        }
        stage('Push to AWS ECR') {
            steps{
                withAWS(credentials:'aws-ecr-creds') {
                    script{
                        bat """
                        aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.ap-south-1.amazonaws.com
                        docker tag ${DOCKER_HUB_REPO}:latest ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/saas-backendrepo:latest
                        docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/saas-backendrepo:latest
                         """
                    }
                }
            }
        }
        stage('App Deploy to Docker container'){
            steps{
                bat """
                    docker run -d --name saas-backend -p 3000:3000 ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/saas-backendrepo:latest
                """
            }
        }
    }
}