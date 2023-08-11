# DevOps_Evaluation_A01

The objective of this project is to develop and deploy a user management microservice. The microservice will be capable of performing the following actions:

1. Create a new user with a name and email address.
2. Retrieve information of an existing user based on their identifier.
3. Update information of an existing user. 
4. Delete an existing user. 

![Service Example Architecture](https://github.com/blais3pasc4l/DevOps_Evaluation_A01/blob/master/Marco%20horizontal%20AWS%20(2019).png?raw=true)

# Docker compose

En el directorio app correr:

```bash
$ cd app &&  sudo sh run sh
```

Con esto esta expuesta la app y la base de datos en el puerto localhost:4000

## Subir a ECR

```bash
$ docker build -t <AWS_ACCOUNT_ID>.dkr.ecr.us-west-1.amazonaws.com/app:latest 
```

Autentique la CLI de Docker para usar el registro ECR:

```bash
$ aws ecr get-login --region us-west-1 --no-include-email
```

Push image:

```bash
$ docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-west-1.amazonaws.com/app:latest
```

## Terraform infraestructura

Aquí, definimos el proveedor de AWS. Deberá proporcionar sus credenciales de AWS para poder autenticarse. Defínelas como variables de entorno:

```bash
$ export AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY_ID"
$ export AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_ACCESS_KEY"
```

En el archivo de variables nuevamente, asegúrese de reemplazar <AWS_ACCOUNT_ID> con su ID de cuenta de AWS. (linea 75 de el archivo de variables)

```
variable "docker_image_url_app" {
  description = "Docker image to run in the ECS cluster"
  default     = "<AWS_ACCOUNT_ID>.dkr.ecr.us-west-1.amazonaws.com/app:latest"
}
```

Ahora debemos crear la imagen del Nginx, recuerde cambiar la region de donde desea crear el recurso

```bash
$ docker build -t <AWS_ACCOUNT_ID>.dkr.ecr.us-west-1.amazonaws.com/nginx:latest .
$ docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-west-1.amazonaws.com/nginx:latest
```

```bash
$ terraform init

$ terraform plan

$ terraform apply
```

NOTA: El nombre DNS del balanceador de carga se enviará a la terminal. (alb_hostname)

Derribar la infraestructura una vez hecho:

```bash
$ terraform destroy
```