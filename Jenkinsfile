pipeline {
  agent any

  tools {
    nodejs "node24"
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/VoyagerXIII/portfolioMe.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Archive Build') {
      steps {
        archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
      }
    }
  }
}
