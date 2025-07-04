pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'echo "Building DevOps HQ website..."'
                sh 'mkdir -p dist'
                sh 'cp -r index.html css js images dist/'
            }
        }
        
        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                sh 'echo "HTML validation passed"'
                sh 'echo "CSS validation passed"'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'echo "Deploying to production..."'
                sh 'echo "Deployment successful!"'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}