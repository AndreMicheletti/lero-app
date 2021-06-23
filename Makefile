deploy:
	npm run build
	terraform plan -out 'prod.tfplan'
	terraform apply "prod.tfplan"

endpoint:
	terraform state show azurerm_storage_account.lero-app-prod | grep -o "https:\/\/.*web.core.windows.*\/"
