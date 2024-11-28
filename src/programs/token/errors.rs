use anchor_lang::prelude::*;

#[error_code]
pub enum GovernanceError {
    #[msg("Insufficient voting power")]
    InsufficientVotingPower,
    #[msg("Invalid proposal")]
    InvalidProposal,
    #[msg("Proposal already executed")]
    ProposalAlreadyExecuted,
    #[msg("Voting period not ended")]
    VotingPeriodNotEnded,
}