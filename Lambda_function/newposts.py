import boto3
import os
import uuid
import datetime

now = datetime.datetime.now()

def lambda_handler(event, context):
    
    recordId        = str(uuid.uuid4())
    nomeComponente  = event["componente"]
    numeroVersao    = event["versao"]
    nomeResponsavel = event["responsavel"]
    statusDeploy    = event["status"]
    dadaDeploy      = ["data"]

    # Inserindo um novo registro na tabela do DynamoDB
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['DB_TABLE_NAME'])
    table.put_item(
        Item={
            'id'          : recordId,
            'componente'  : nomeComponente,
            'versao'      : numeroVersao,
            'responsavel' : nomeResponsavel,
            'status'      : statusDeploy,
            'data'        : now.isoformat()
        }
    )
    
return recordId