#!/bin/bash

tmux kill-session -t rtb
tmux new-session -d -s rtb './build/x86_64/bin/launcher --node localhost --script ./node-launch.sh --launch rtbkit/node.launch.json'
tmux rename-window 'launcher'
tmux new-window -d -t rtb:1 -n 'logger' 'tail -F ./logs/logger.log'
tmux new-window -d -t rtb:2 -n 'agent-configuration' 'tail -F ./logs/agent-configuration.log'
tmux new-window -d -t rtb:3 -n 'augmentor' 'tail -F ./logs/augmentor.log'
tmux new-window -d -t rtb:4 -n 'banker' 'tail -F ./logs/banker.log'
tmux new-window -d -t rtb:5 -n 'router' 'tail -F ./logs/router.log'
if [[ "$*" != *--quiet* ]]
then
    tmux attach -t rtb
fi
