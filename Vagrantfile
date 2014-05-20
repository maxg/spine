Vagrant.configure("2") do |config|

  config.vm.box = "hashicorp/precise64"

  config.vm.network "private_network", ip: "10.18.6.120"

  config.vm.provider "virtualbox" do |vb|
    vb.customize [ "setextradata", :id,
                   "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1" ]
  end

  config.vm.provision "puppet"

end
