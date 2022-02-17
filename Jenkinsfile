pipeline {
    // =======================================================================
    // CLONAT el Jenkinsfile del projecte de JENKINS / GitHub => Hello SPRING
    // =======================================================================
    agent any
    stages {
        stage('Test') {
            steps {
                echo 'TEST #1 . . . . . . . . .'
                sh 'yarn cy:ci'
            }
            post {
                echo 'TEST POST . . . . . . . . .'
                always {
                    junit 'results/test-output-*.xml'
                }
            }
        }
    }
}