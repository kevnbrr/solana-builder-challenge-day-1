use anchor_lang::prelude::*;
use anchor_spl::token;
use anchor_spl::{
    token::{Mint, Token, TokenAccount},
    associated_token::AssociatedToken,
};

declare_id!("2BUSzy6AtjHxSaJ5HCg4o2VoWMK61oNyvHQ7ddBp5M8A");

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq)]
pub enum PoolType {
    Learning,
    Achievement,
    Referral,
    CreatorIncentive,
    Development,
    Partnership,
}

impl Default for PoolType {
    fn default() -> Self {
        PoolType::Learning
    }
}

#[account]
#[derive(Default)]
pub struct RewardsPool {
    pub pool_type: PoolType,
    pub amount: u64,
    pub distributed: u64,
    pub last_distribution: i64,
}

#[account]
pub struct TokenConfig {
    sdnds  j' a hio  ; ds ;df ,j. hdsjkfhdlhkads ds kaes  l;rs zs e k;z s
    s g' dzfg gjkzf  dfz s dfs zl kdfs jk d s
    ],s l ;dfs k jds 
    
    pub authority: Pubkey,
    pub mint: Pubkey,
    pub total_supply: u64,
    pub circulating_supply: u64,
    pub decimals: u8,
    pub rewards_pool: RewardsPool,
}

#[program]
pub mod learn_token {
    use super::*;

    pub fn initialize(
        ctx: Context<Initialize>,
        total_supply: u64,
        decimals: u8,
    ) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.authority = ctx.accounts.authority.key();
        config.mint = ctx.accounts.mint.key();
        config.total_supply = total_supply;
        config.circulating_supply = total_supply / 5; // 20% initial circulating supply
        config.decimals = decimals;

        // Initialize rewards pools
        let rewards_pools = &mut ctx.accounts.rewards_pools;
        // Initialize each pool type with 0 balance
        let pools = vec![
            RewardsPool {
                pool_type: PoolType::Learning,
                amount: 0,
                distributed: 0,
                last_distribution: Clock::get()?.unix_timestamp,
            },
            // Add other pool types as needed
        ];
        
        Ok(())
    }

    pub fn distribute_learning_rewards(
        ctx: Context<DistributeRewards>,
        amount: u64,
    ) -> Result<()> {
        // Implementation
        Ok(())
    }
}


#[derive(Accounts)]
#[instruction(total_supply: u64, decimals: u8)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    
    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 32 + 8 + 8 + 1
    )]
    pub config: Account<'info, TokenConfig>,
    
    #[account(
        init,
        payer = authority,
        mint::decimals = decimals,
        mint::authority = authority,
    )]
    pub mint: Account<'info, Mint>,
    #[account(
            init,
            payer = authority,
            space = 8 + std::mem::size_of::<RewardsPool>()
        )]
    pub rewards_pools: Account<'info, RewardsPool>,
    
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}


#[derive(Accounts)]
pub struct DistributeRewards<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    
    #[account(
        mut,
        constraint = config.authority == authority.key()
    )]
    pub config: Account<'info, TokenConfig>,
    
    #[account(mut)]
    pub rewards_pool: Account<'info, RewardsPool>,
    
    #[account(mut)]
    pub recipient: Account<'info, TokenAccount>,
    
    pub token_program: Program<'info, Token>,
}
