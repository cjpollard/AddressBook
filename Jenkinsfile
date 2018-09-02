pipeline {
    agent any
    stages {
        stage("install") {
            steps {
                bat "npm set progress=false"
                bat "npm i --prefer-offline --ignore-scripts"
            }
        }
        stage("test-server") {
            steps {
                bat "npm run testserver"
            }
        }
        stage("test-client") {
            steps {
                bat "npm test"
            }
        }
        stage("build") {
            steps {
                bat "npm run build-prod"
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: "public/", fingerprint: true
            junit "build/reports/**/*.xml"
        }
    }
}