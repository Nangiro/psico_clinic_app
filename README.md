# Clinica Bem Estar

## Containers
---

Para a execução do projeto será necessário a instalação das seguintes tecnologias em sua máquina:
 1. [Docker](https://docs.docker.com/get-docker/)
 2. [Kubectl](https://kubernetes.io/docs/tasks/tools/)
 3. [Minikube](https://github.com/kubernetes/minikube/releases)

Uma vez que as ferramentas foram devidamente instaladas, inicie o minikube.
```
minikube start
```

Na pasta root do programa execute os seguintes comando para criar a imagem do container e, em seguida, criar os Pods utilizando o Kubernetes:
```
docker build -t psico_clinic_app:0.5 .
kubectl apply -f deployment.yaml
```

Neste ponto deve haver um container em execução com um pod. Você pode ver o pod utilizando:
```
kubectl get pods
```

Para ter acesso à URL onde o programa esta sendo executado use:
```
minikube service psico-clinic-app-service --url
```
