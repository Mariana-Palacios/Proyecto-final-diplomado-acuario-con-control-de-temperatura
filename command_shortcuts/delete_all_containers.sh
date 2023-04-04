docker_images_id=$(docker image ls | awk '{ print $3 }' | grep -v IMAGE)
docker_instances_id=$(docker ps --all | awk '{ print $1 }' | grep -v CONTAINER)

for id in $docker_images_id
do
    docker image rm -f $id
done

for id in $docker_instances_id
do
    docker rm -f $id
done