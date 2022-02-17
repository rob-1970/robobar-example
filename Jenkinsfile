pipeline {
    // =======================================================================
    // CLONAT el Jenkinsfile del projecte de JENKINS / GitHub => Hello SPRING
    // =======================================================================
    agent any
    stages {

        stage('Install') {
            steps {
                nodejs('node-14.18.2'){
                    sh 'yarn install'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'TEST #1 . . . . . . . . .'
                nodejs('node-14.18.2'){
                    sh 'yarn cy:ci'
                }
            }
            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}