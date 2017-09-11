import boto3
import os
import uuid
import datetime

def lambda_handler(event, context):
    
    recordId = str(uuid.uuid4())
    nomeComponente = event["nomeComponente"]
    numeroVersao = event["numeroVersao"]
    nomeResponsavel = event["nomeResponsavel"]
    statusDeploy = event["statusDeploy"]
    dataDeploy = ["dataDeploy"]

    
    # Inserindo um novo registro na tabela do DynamoDB
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(os.environ['DB_TABLE_NAME'])
    table.put_item(
        Item={
            'DeployID' : recordId,
            'nomeComponente' : nomeComponente,
            'numeroVersao' : numeroVersao,
            'nomeResponsavel' : nomeResponsavel,
            'statusDeploy' : statusDeploy,
            'dataDeploy' : datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
    )
    
    return recordId