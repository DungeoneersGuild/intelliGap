async function connectWallet() {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return window.ethereum.selectedAddress;
    } else if (WalletConnectProvider.isAvailable()) {
      const provider = new WalletConnectProvider();
      await provider.enable();
      return provider.accounts[0];
    } else {
      showModal("Please install MetaMask or scan with WalletConnect.");
    }
  }
  