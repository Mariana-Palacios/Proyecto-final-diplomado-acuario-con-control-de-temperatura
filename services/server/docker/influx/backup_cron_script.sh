docker exec influxdb bash -c 'rm -r /backup'
docker exec influxdb bash -c 'influx backup /backup -t $DOCKER_INFLUXDB_INIT_ADMIN_TOKEN'
docker cp influxdb:/backup /home/ubuntu/project/Proyecto-final-diplomado-acuario-con-control-de-temperatura/services/server/docker/influx/backup/backup_$(date '+%Y-%m-%d_%H-%M')
rm -r $(ls -td ./backup/* | tail -n 1)
