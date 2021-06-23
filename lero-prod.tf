# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 2.26"
    }
  }

  required_version = ">= 0.14.9"
}

module "build_files" {
  source   = "hashicorp/dir/template"
  base_dir = "/home/andre/dev/react/lero-app/build"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "lero-app-prod" {
  name     = "lero-app-prod"
  location = "brazilsouth"
}

resource "azurerm_storage_account" "lero-app-prod" {
  name                     = "leroappstorageprod"
  resource_group_name      = azurerm_resource_group.lero-app-prod.name
  location                 = azurerm_resource_group.lero-app-prod.location
  account_kind             = "StorageV2"
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }

  tags = {
    environment = "prod"
  }
}

resource "azurerm_storage_container" "lero-app-prod" {
  name                  = "$web"
  storage_account_name  = azurerm_storage_account.lero-app-prod.name
  container_access_type = "private"
}

resource "azurerm_storage_blob" "uploaded_file" {
  for_each = module.build_files.files

  name                   = each.key
  storage_account_name   = azurerm_storage_account.lero-app-prod.name
  storage_container_name = azurerm_storage_container.lero-app-prod.name
  type                   = "Block"
  source                 = "/home/andre/dev/react/lero-app/build/${each.key}"
  content_type           = each.value.content_type
}