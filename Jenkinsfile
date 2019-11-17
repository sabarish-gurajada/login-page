pipeline {
    agent {
label 'master'
}

IMAGE = 'tcsdevopsfinal'
VERSION = '1.0'
PROJECTID= 'tcsdevopsathon'

    stages {
	stage('App build'){
		steps{
            echo 'starting App build'
		npm run build
        echo 'App build completed'
		}
	}
        stage('Image Build') {
            steps {
                echo 'Image Build started'
                docker build -t ${IMAGE} .
                echo 'docker build completed'
               
            }
        }
         stage('Image TAG') {
            steps {
               echo 'Image Tagging started'
               docker tag ${IMAGE}:{VERSION} gcr.io/${PROJECTID}/${IMAGE}:${VERSION}
               echo 'Image tagging is completed'
            }
        }

        stage('Image Push') {
            steps {
                echo 'Pushing Image started.'
                docker push gcr.io/${PROJECTID}/${IMAGE}:${VERSION}
                push completed
            }
        }
        stage('Image Pull') {
            steps {
                echo 'Pulling....'
                docker pull gcr.io/${PROJECTID}/${IMAGE}:${VERSION}
                 echo 'pull completed'
            }
	
        }
	stage('Image Deploy'){
	steps {
                echo 'Deploying Image'
                kubectl create -f deployment.yaml
                kubectl create -f service.yaml
                echo 'Deploying has been completed'
            }
	}
    }
}