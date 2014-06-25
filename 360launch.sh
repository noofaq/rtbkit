#!/bin/bash

tmux kill-session -t rtb
tmux new-session -d -s rtb './build/x86_64/bin/launcher --node localhost --script ./360launch.sh --launch rtbkit/360dialog.launch.json'
tmux rename-window 'launcher'
tmux new-window -d -t rtb:1 -n 'monitor' 'tail -F ./logs/monitor.log'
tmux new-window -d -t rtb:2 -n 'logger' 'tail -F ./logs/logger.log'
tmux new-window -d -t rtb:3 -n 'agent-configuration' 'tail -F ./logs/agent-configuration.log'
tmux new-window -d -t rtb:4 -n 'redis-augmentor' 'tail -F ./logs/redis-augmentor.log'
tmux new-window -d -t rtb:5 -n 'router' 'tail -F ./logs/router.log'
tmux new-window -d -t rtb:6 -n 'retargeting-agent' 'tail -F ./logs/retargeting-agent.log'
if [[ "$*" != *--quiet* ]]
then
    tmux attach -t rtb
fi
