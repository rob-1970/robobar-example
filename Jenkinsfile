pipeline {
    // =======================================================================
    // CLONAT el Jenkinsfile del projecte de JENKINS / GitHub => Hello SPRING
    // =======================================================================
    agent any
    stages {
        stage('Test') {
            steps {
                sh './yarn cy:ci'
            }

            }
            post {
                always {
                    junit 'build/test-results/test/*.xml'
                }
            }
        }
    }
}