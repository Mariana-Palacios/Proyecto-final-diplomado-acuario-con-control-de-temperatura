cp -r $(ls -td ./backup/* | head -n 1) ./backup/backup_to_restore
docker cp ./backup/backup_to_restore influxdb:/
docker exec influxdb bash -c 'influx restore /backup_to_restore/ --full'
docker exec influxdb bash -c 'rm -r /backup_to_restore'
rm -r ./backup/backup_to_restore
