public int NotificationId {get; set;}
public int UserId {get; set;}
public SavingsPlanId {get; set;}
public decimal AppliedAmount {get; set;}
public string Status {get; set;}
public DateTime ApplicationDate {get; set;}
public string? Remarks {get; set;}
public string? ProofDocument {get; set;}
public User? User {get; set;}
public SavingsPlan? SavingsPlan {get; set;}