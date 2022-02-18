pipeline {
    // =======================================================================
    // CLONAT el Jenkinsfile del projecte de JENKINS / GitHub => Hello SPRING
    // =======================================================================
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Install') {
            when { expression { false} }
            steps {
                echo 'INTALLING step #1 . . . . . . . . .'
                nodejs('node-14.18.2'){
                    sh 'yarn install'
                }
            }
        }

        // per a saltar aquest pas al posar-ho a FALSE
        stage('Test') {
            when { expression { false} }
                steps {
                echo 'TEST step #1 . . . . . . . . .'
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

        stage('Security') {
            steps {
                echo 'SECURITY step #1 . . . . . . . . .'
                sh '/usr/local/bin/trivy fs --format json --output trivy-results.json .'

            }
            post {
                always {
                    recordIssues(tools: [trivy(pattern: 'trivy-results.json')])
                }
            }
        }

    }
}