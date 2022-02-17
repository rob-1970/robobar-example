pipeline {
    // =======================================================================
    // CLONAT el Jenkinsfile del projecte de JENKINS / GitHub => Hello SPRING
    // =======================================================================
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'TEST #1 . . . . . . . . .'
                nodejs('node-14.18.2'){
                    sh 'yarn install'
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