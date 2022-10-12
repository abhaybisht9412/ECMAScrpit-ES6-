#include <bits/stdc++.h>
using namespace std;
#define ll long long int
int main() {
	// your code goes here
	ios_base::sync_with_stdio(false);
	cin.tie(NULL) ; 
    cout.tie(NULL)	;

	ll q;
	cin>>q;
	while(q--){
    int n;
    cin>>n;
    int a[n-1];
    ll sum = 0;
    for(int i=0;i<n-1;i++){
        cin>>a[i];
        sum+=a[i];
    }
   cout<<sum+a[n-2]<<endl;
	}
}