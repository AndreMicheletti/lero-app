deploy:
	npm run build
	terraform plan -out 'prod.tfplan'
	terraform apply "prod.tfplan"