# Clinica Bem Estar

## Containers

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
Com este comando você também terá acesso ao ID do Pod, isso será usado mais para a frente.

Para ter acesso à URL onde o programa esta sendo executado use:
```
minikube service psico-clinic-app-service --url
```
Agora utilize o comando a seguir para entrar dentro do Pod:
```
kubectl exec -it <ID do Pod> -- /bin/bash
```

Uma vez dentro do Pod será necessário instalar um editor de texto a sua escolha. Como exemplo utilizaremos o nano:
```
apt install nano
```

Agora edite o arquivo `.env ` para alterar o valor  da variavel DB_DATABASE de `database/database.sqlite` para `../database/database.sqlite`

Para finalizar execute os seguintes comandos ainda dentro do container:
```
npm run build
php artisan serve
```

A aplicação deverá estar sendo exeibida na URL do Pod resgatada anteriormente.

## Front

Para a execução do projeto será necessário a instalação das seguintes tecnologias em sua máquina:
1. [Node](https://nodejs.org/en/download/package-manager)

Uma vez que as ferramentas foram devidamente instaladas, acesse a pasta do front e instale as dependencias.
```
npm install
```

Após a instalação das dependencias, inicie o projeto.

```
npm run dev
```
