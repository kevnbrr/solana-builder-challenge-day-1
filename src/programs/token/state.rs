use anchor_lang::prelude::*;

#[account]
pub struct TokenConfig {
    pub authority: Pubkey,
    pub mint: Pubkey,
    pub total_supply: u64,
    pub circulating_supply: u64,
    pub decimals: u8,
}

#[account]
pub struct RewardsPool {
    pub pool_type: PoolType,
    pub amount: u64,
    pub distributed: u64,
    pub last_distribution: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq)]
pub enum PoolType {
    Learning,
    Achievement,
    Referral,
    CreatorIncentive,
    Development,
    Partnership,
}

#[account]
pub struct UserProfile {
    pub user: Pubkey,
    pub staked_amount: u64,
    pub rewards_earned: u64,
    pub last_claim: i64,
    pub achievements: Vec<Achievement>,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Achievement {
    pub id: String,
    pub earned_at: i64,
    pub reward_claimed: bool,
}