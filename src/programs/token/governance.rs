use anchor_lang::prelude::*;
use crate::state::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Proposal {
    pub id: u64,
    pub proposer: Pubkey,
    pub title: String,
    pub description: String,
    pub votes_for: u64,
    pub votes_against: u64,
    pub start_time: i64,
    pub end_time: i64,
    pub executed: bool,
}

#[account]
pub struct GovernanceConfig {
    pub min_stake_to_propose: u64,
    pub voting_period: i64,
    pub proposal_count: u64,
}

#[derive(Accounts)]
pub struct CreateProposal<'info> {
    #[account(mut)]
    pub proposer: Signer<'info>,
    #[account(
        constraint = user_profile.staked_amount >= governance_config.min_stake_to_propose
    )]
    pub user_profile: Account<'info, UserProfile>,
    #[account(mut)]
    pub governance_config: Account<'info, GovernanceConfig>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    #[account(mut)]
    pub proposal: Account<'info, Proposal>,
    pub user_profile: Account<'info, UserProfile>,
}