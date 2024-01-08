import Principal "mo:base/Principal";
import Text "mo:base/Text";
import List "mo:base/List";
import map "mo:stablehashmap/FunctionalStableHashMap";
actor {

  public type URL = Text;
  public type Name = Text;
  public type TimeStamp__1 = Int;
  public type CreatorId = Text;
  public type AirDropId = Text;
  public type LaunchId__1 = Text;
  public type CollectionId__1 = Text;
  public type PrincipalId__2 = Text;
  public type CollectionId = Text;
  public type CollectionRequest = {
    website_url : URL;
    creator_name : Name;
    nft_receive_address : Text;
    collection_name : Name;
    creator_royalty : Float;
    keywords : Text;
    collection_description : Text;
    collection_brief_description : Text;
    collection_tiny_description : Text;
    royalty_receive_address : Text;
    social_links : {
      twitter : URL;
      distrikt : URL;
      discord : URL;
      additional : Text;
      dSCVR : URL;
      telegram : URL;
      medium : URL;
    };
    images : {
      collection_banner_url : URL;
      collection_page_image_url : URL;
      avatar_url : URL;
      homepage_banner_url : URL;
    };
  };
  public type Subaccount = {
    account_id : Blob;
    subaccount_id_hex : Text;
    subaccount_index : Nat32;
    subaccount_id : Blob;
    account_id_hex : Text;
  };
  public type LaunchPayStable = {
    subaccount_balance_in_e8sICP : Nat64;
    status : Text;
    total_assets_size_in_mb : Nat64;
    updated_at : Int;
    cost_in_ICP_per_mb : Float;
    created_at : Int;
    total_assets : Nat64;
    verified_at : ?Int;
    subaccount_index : Nat32;
    asset_cost_in_e8sICP : Nat64;
    launch_id : Text;
  };
  public type LaunchResponse = {
    updated_at : TimeStamp__1;
    is_air_drop_nft_enabled : Bool;
    launch_status : Text;
    is_zip_upload : Bool;
    air_drop_id_list : [AirDropId];
    collection_id : CollectionId__1;
    created_at : TimeStamp__1;
    metadata_url : URL;
    zip_url : URL;
    launch_pay_subaccount : ?Subaccount;
    thumbnail_zip_url : URL;
    to_shuffle : ?Bool;
    launch_pay : ?LaunchPayStable;
    launch_name : Name;
    launch_type : Text;
    launch_id : LaunchId__1;
  };
  public type CollectionPayStable = {
    subaccount_balance_in_e8sICP : Nat64;
    status : Text;
    collection_id : Text;
    collection_fee_in_e8sICP : Nat64;
    created_at : Int;
    verified_at : ?Int;
    subaccount_index : Nat32;
  };
  public type CollectionResponse = {
    collection_pay : ?CollectionPayStable;
    website_url : URL;
    updated_at : TimeStamp__1;
    creator_name : Name;
    creator_id : CreatorId;
    launches : [LaunchResponse];
    collection_id : CollectionId__1;
    nft_receive_address : Text;
    created_at : TimeStamp__1;
    collection_name : Name;
    creator_royalty : Float;
    keywords : Text;
    collection_pay_subaccount : ?Subaccount;
    collection_description : Text;
    collection_brief_description : Text;
    principal_id : PrincipalId__2;
    collection_tiny_description : Text;
    royalty_receive_address : Text;
    social_links : {
      twitter : URL;
      distrikt : URL;
      discord : URL;
      additional : Text;
      dSCVR : URL;
      telegram : URL;
      medium : URL;
    };
    images : {
      collection_banner_url : URL;
      collection_page_image_url : URL;
      avatar_url : URL;
      homepage_banner_url : URL;
    };
  };
  public type LaunchRequest = {
    is_air_drop_nft_enabled : Bool;
    air_drop_id_list : [AirDropId];
    collection_id : CollectionId__1;
    metadata_url : URL;
    thumbnail_zip_url : URL;
    launch_name : Name;
    launch_type : Text;
  };
  public type LaunchResponse__1 = {
    updated_at : TimeStamp__1;
    is_air_drop_nft_enabled : Bool;
    launch_status : Text;
    is_zip_upload : Bool;
    air_drop_id_list : [AirDropId];
    collection_id : CollectionId__1;
    created_at : TimeStamp__1;
    metadata_url : URL;
    zip_url : URL;
    launch_pay_subaccount : ?Subaccount;
    thumbnail_zip_url : URL;
    to_shuffle : ?Bool;
    launch_pay : ?LaunchPayStable;
    launch_name : Name;
    launch_type : Text;
    launch_id : LaunchId__1;
  };

  type NftActor = actor {
    countSubaccounts : () -> async Nat;
    createCollection : shared CollectionRequest -> async ?CollectionResponse;
    getCollection : shared query CollectionId -> async ?CollectionResponse;
    createLaunch : shared LaunchRequest -> async ?LaunchResponse__1;
    updateCollection : shared (CollectionId, CollectionRequest) -> async Bool;
  };
  let actorClass = actor ("zggm4-5qaaa-aaaai-qmjea-cai") : NftActor;
  stable var collectionMap = map.init<Principal, List.List<CollectionId__1>>();
  stable var launchMap = map.init<Principal, ?LaunchResponse__1>();

  public func getPk() : async Nat {
    await actorClass.countSubaccounts();
  };
  public shared ({ caller = caller }) func collectionCreation(collectionData : CollectionRequest) : async ?CollectionResponse {
    let collectionResponse = await actorClass.createCollection(collectionData);
    switch (collectionResponse) {
      case (null) { null };
      case (?result) {
        let collectionId = result.collection_id;
        var data = List.nil<CollectionId__1>();
        switch (map.get<Principal, List.List<CollectionId__1>>(collectionMap, Principal.equal, Principal.hash, caller)) {
          case (null) {
            map.put<Principal, List.List<CollectionId__1>>(collectionMap, Principal.equal, Principal.hash, caller, List.push(collectionId, data));
          };
          case (?r) {
            data := List.push<CollectionId__1>(collectionId, r);
            map.put<Principal, List.List<CollectionId__1>>(collectionMap, Principal.equal, Principal.hash, caller, data);
          };
        };

        collectionResponse;
      };
    };

  };
  // public shared query ({ caller = caller }) func getPrincipal() : async Principal {
  //   return caller;
  // };

  public shared ({ caller = caller }) func getCollectionIds() : async ?[CollectionId__1] {
    let listOfCollectionId : ?[CollectionId__1] = switch (map.get<Principal, List.List<CollectionId__1>>(collectionMap, Principal.equal, Principal.hash, caller)) {
      case (null) { null };
      case (?r) { ?List.toArray(r) };
    };
  };

  public shared ({ caller = caller }) func getCollection(collectionId : CollectionId) : async ?CollectionResponse {

    await actorClass.getCollection(collectionId);
  };

  // public shared ({ caller = caller }) func updateCollection(collectionId : CollectionId, collectionRequest : CollectionRequest) : async Bool {
  //   await actorClass.updateCollection(collectionId, collectionRequest);
  // };

  public shared ({ caller = caller }) func launchCreate(launchRequest : LaunchRequest) : async ?LaunchResponse__1 {
    await actorClass.createLaunch(launchRequest);
  };
};
