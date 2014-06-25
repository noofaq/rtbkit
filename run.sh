# add ENV vars
source ~/.profile

# run redis
sudo redis-server ./rtbkit/sample.redis.conf

# run zookeeper
sudo ~/local/bin/zookeeper/bin/zkServer.sh start

# run carbon
sudo /opt/graphite/bin/carbon-cache.py start

# run graphite
sudo PYTHONPATH=`pwd`/whisper /opt/graphite/bin/run-graphite-devel-server.py --libs=/opt/graphite/webapp/ /opt/graphite/
