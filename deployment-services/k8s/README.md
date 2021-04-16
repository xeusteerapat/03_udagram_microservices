# Create Cluster with EKS Control

1. Install ```eksctl``` command line tool

```bash
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
```

or via Homebrew

```bash
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
```

For fish shell

```bash
mkdir -p ~/.config/fish/completions
eksctl completion fish > ~/.config/fish/completions/eksctl.fish
```

2. Create cluster

```bash
eksctl create cluster \
--profile udac_eks_demo \
--name xeus-udagram-microservices \
--region ap-southeast-1 \
--nodegroup-name udagram-nodes \
--node-type t2.micro \
--nodes 2
```
