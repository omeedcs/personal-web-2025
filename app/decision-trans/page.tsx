"use client";

import { useState } from "react";
import Link from "next/link";

export default function DecisionTransformerPage() {
  const [activeTab, setActiveTab] = useState<"paper" | "poster">("paper");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <Link 
          href="/publications"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Publications
        </Link>
        
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Decision Transformer for Robot Imitation Learning
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Alex Chandler, Jake Grigsby, Omeed Tehrani
          </span>
          <span>•</span>
          <span>University of Texas at Austin</span>
          <span>•</span>
          <span>2023</span>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/jakegrigsby/robomimic-decision-transformer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Code
          </a>
          <a
            href="mailto:omeed@cs.utexas.edu"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Abstract */}
      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Abstract
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Traditional reinforcement learning relies on policy optimization to maximize cumulative reward. 
          This project reframes RL as a sequence modeling problem, using the Transformer architecture instead of 
          dynamic programming or policy gradients. We extend the original Decision Transformer by incorporating 
          mixed-quality input data (machine-generated, multi-human, and proficient-human demonstrations) using 
          the robomimic dataset. By introducing a semi-sparse reward function, this approach quantifies the benefit 
          of return-conditioned imitation learning, outperforming standard behavioral cloning on mixed-quality 
          datasets—particularly in the Lift and Can robotic manipulation tasks.
        </p>
      </div>

      {/* PDF Viewer with Tabs */}
      <div className="mb-12">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab("paper")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "paper"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Full Paper
          </button>
          <button
            onClick={() => setActiveTab("poster")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "poster"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Poster Presentation
          </button>
        </div>

        <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <iframe
            src={
              activeTab === "paper"
                ? "/decision-trans/Decision_Transformer__for_Robot_Imitation_Learning%20(8).pdf"
                : "/decision-trans/Poster%20Presentation%20of%20Decision%20Transformer%20for%20Robot%20Imitation%20Learning.pdf"
            }
            className="w-full h-[800px]"
            title={activeTab === "paper" ? "Decision Transformer Paper" : "Poster Presentation"}
          />
        </div>
      </div>

      {/* Key Contributions */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Mixed-Quality Data
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Handles datasets combining machine-generated, multi-human, and expert demonstrations—realistic for production robotics
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Semi-Sparse Rewards
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Novel reward shaping that encourages faster task completion and provides stronger learning signal
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Strong Performance
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            94% success on Lift task, 81% on Can task—significantly outperforming behavioral cloning baselines
          </p>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-12">
        {/* Motivation */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Motivation
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Real-world imitation learning often struggles with datasets of varying quality. Traditional RL approaches 
              require carefully curated demonstrations, but in practice, we often have mixed-quality data from different 
              sources: expert demonstrations, sub-optimal human trajectories, and machine-generated data.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Why Transformers?</h3>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Sample efficiency:</strong> Fewer samples needed for high performance</li>
                <li><strong>Stable training:</strong> Large-scale training without policy gradient instability</li>
                <li><strong>Sequence modeling:</strong> Natural fit for temporal decision-making problems</li>
                <li><strong>Proven track record:</strong> Success in NLP and vision transfers to RL domains</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Goal:</strong> Quantify the benefit of return-conditioned imitation learning on mixed-quality 
              data by reinterpreting RL as sequence prediction—eliminating the need for value function estimation or policy gradients.
            </p>
          </div>
        </section>

        {/* Architecture Visualization */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Architecture
          </h2>
          
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-6">
            <img 
              src="/decision-trans/arch-gif.gif" 
              alt="Decision Transformer Architecture Animation"
              className="w-full rounded-lg"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4 italic">
              Architecture diagram showing how states, actions, and return-to-go tokens flow through the transformer
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We input <strong>states</strong>, <strong>actions</strong>, and <strong>returns-to-go</strong> into a causal transformer 
              to predict desired actions. A key innovation: we combine states, actions, and return-to-go into <strong>one token</strong> 
              per timestep. This shortens the sequence length and reduces computational requirements compared to the original Decision Transformer.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Architectural Differences</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Token compression:</strong> Concatenate (s<sub>t</sub>, a<sub>t-1</sub>, R̂<sub>t</sub>) → single token</li>
                <li><strong>Stochastic policy:</strong> Multi-modal GMM instead of deterministic actions</li>
                <li><strong>Pre-Norm architecture:</strong> Normalization before attention/FF layers for training stability</li>
                <li><strong>Learned positional embeddings:</strong> Better temporal modeling than fixed sinusoidal</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Implementation Details</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The <code className="text-sm bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">TransformerEncoder</code> processes 
                the concatenated input sequence through multiple layers of self-attention:
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-700 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-800 dark:text-gray-200">{`# From transformer.py
def forward(self, states, pad_mask):
    batch, length, dim = states.shape
    # Causal masking prevents looking at future tokens
    mask = self.make_attn_mask(x=states, pad_mask=pad_mask)
    
    # Add positional embeddings
    pos_emb = self.position_embedding(pos_idxs)
    traj_emb = self.ff1_state(states) + pos_emb
    
    # Self-attention layers
    for layer in self.layers:
        traj_emb, attn = layer(self_seq=traj_emb, self_mask=mask)
    
    return self.norm(traj_emb)`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Method */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Method
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                1. Data & Tasks
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Focused on <strong>Lift</strong> (cube lifting) and <strong>Can</strong> (placing can in bin) tasks from the robomimic benchmark.
                Combined all dataset types into an "All" category to test robustness:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">MG (Machine-Generated)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Mixture of suboptimal data from state-of-the-art RL agents. Heavily weighted in "All" dataset.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">PH (Proficient-Human)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    200 high-quality demonstrations from expert teleoperators.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">MH (Multi-Human)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    300 demonstrations from teleoperators of varying proficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                2. Semi-Sparse Reward Function
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>The Problem:</strong> Robomimic uses sparse binary rewards (1 for success, 0 otherwise). We attempted to enable 
                dense rewards, but found the dense reward was <em>uncorrelated with dataset quality</em>. For example, in the Lift dataset, 
                "proficient human" (PH) had the <em>lowest</em> return while "machine generated" (MG) had the highest—due to sequence 
                length mattering more than success rate.
              </p>
              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 p-6 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Our Solution</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Manual reward shaping with a success bonus that <strong>decreases every timestep</strong>:
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-purple-300 dark:border-purple-700">
                  <code className="text-lg text-gray-900 dark:text-gray-100">
                    r<sub>t</sub><sup>DT</sup> = r<sub>t</sub><sup>robomimic</sup> + d<sub>t</sub> × max(500 - success_timestep, 0)
                  </code>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                  If success happens at timestep 100, reward bonus = 400. At timestep 499, bonus = 1. Past 500 steps, bonus = 0.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-700 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-sans"># From data_utils.py - RTGSequenceDataset.get_item()</p>
                <pre className="text-gray-800 dark:text-gray-200">{`# Find timestep that leads to success
for t, d in enumerate(future_info["dones"]):
    if d:
        break
success_step = index_in_demo + t + 1

# Apply semi-sparse reward function
future_rews = future_info["rewards"].copy()
future_rews[t] = max(500.0 - success_step, 0.0)
future_rews[t + 1:] = 0.0

# Compute return-to-go via reverse cumsum
rtgs = np.flip(np.cumsum(np.flip(future_rews)))`}</pre>
              </div>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Encourages efficiency:</strong> Faster completions get higher returns</li>
                <li><strong>Reduces bias:</strong> Long, meandering trajectories no longer dominate</li>
                <li><strong>Wider RTG distribution:</strong> Better signal for return-conditioning</li>
                <li><strong>Maintains sparsity:</strong> Still depends on task success, not per-step progress</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                3. Policy Architecture: Gaussian Mixture Models
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Unlike the original Decision Transformer's deterministic policy, we train a <strong>multi-modal stochastic policy</strong> 
                using Gaussian Mixture Models. This is crucial for modeling the multi-modal action distributions present in human demonstrations.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-700 font-mono text-sm overflow-x-auto mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-sans"># From agent.py - GMM policy head</p>
                <pre className="text-gray-800 dark:text-gray-200">{`def make_action_dist(self, params):
    if self.policy == "gmm":
        # Split params into means, log_stds, and mixture weights
        idx = self.gmm_modes * self.d_action
        means = rearrange(params[:, :, :idx], 
                         'b l (m p) -> b l m p', m=self.gmm_modes)
        log_std = rearrange(params[:, :, idx:2*idx], 
                           'b l (m p) -> b l m p', m=self.gmm_modes)
        logits = params[:, :, 2*idx:]
        
        # Create mixture distribution
        comp = pyd.Independent(pyd.Normal(loc=means, scale=std), 1)
        mix = pyd.Categorical(logits=logits)
        dist = pyd.MixtureSameFamily(mix, comp)
        dist = TanhWrappedDistribution(base_dist=dist, scale=1.0)
    return dist`}</pre>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Configuration</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 512-d embeddings</li>
                    <li>• 2048-d feedforward</li>
                    <li>• 4 transformer layers</li>
                    <li>• Context lengths: 1, 3, 10, 20</li>
                    <li>• 5 GMM modes (default)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why GMM?</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Captures multi-modal action distributions</li>
                    <li>• Models multiple valid strategies</li>
                    <li>• Outperforms Gaussian on Can task</li>
                    <li>• Better for varied human demonstrations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                4. Training
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Optimization</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• AdamW optimizer</li>
                    <li>• 2000-step linear warmup</li>
                    <li>• Batch size: 256</li>
                    <li>• ~6 hours/run on RTX 3090</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Evaluation</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 8 parallel environments</li>
                    <li>• Success rate metric</li>
                    <li>• Test-time: max RTG conditioning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Results
          </h2>
          
          <div className="space-y-6">
            {/* Lift Task */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Lift Task (All Dataset)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Model</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Success Rate</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-4 py-3 text-sm">Naive BC</td>
                      <td className="px-4 py-3 text-sm">35%</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Fails on mixed-quality data</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="px-4 py-3 text-sm">DT-3</td>
                      <td className="px-4 py-3 text-sm">~75%</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Strong improvement with return conditioning</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-950/30">
                      <td className="px-4 py-3 text-sm font-semibold">DT-20</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400">94%</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Best performance—filters noise effectively</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Can Task */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Can Task (All Dataset)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Model</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Success Rate</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-4 py-3 text-sm">Naive BC</td>
                      <td className="px-4 py-3 text-sm">14%</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Struggles with multimodality</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-950/30">
                      <td className="px-4 py-3 text-sm font-semibold">DT-3</td>
                      <td className="px-4 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400">81%</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Outperforms all baselines</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Findings</h4>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Longer context sequences (k=10-20) improve action prediction and robustness</li>
              <li>GMM policies outperform Gaussian on multi-modal demonstrations</li>
              <li>Larger Transformers show better performance than smaller architectures</li>
              <li>Return-conditioning helps filter low-quality data during training</li>
            </ul>
          </div>
        </section>

        {/* Discussion */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Discussion & Future Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Limitations
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Long training time (~24 hours for mixed datasets)</li>
                <li>• Data imbalance toward low-quality trajectories</li>
                <li>• Test-time compounding errors in long sequences</li>
                <li>• Limited to low-dimensional robomimic tasks</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Future Directions
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Timestep counters in state embeddings</li>
                <li>• Better reward functions for dense feedback</li>
                <li>• Large-scale hyperparameter optimization</li>
                <li>• Extension to complex tasks (Tool Hang, Square)</li>
                <li>• Real-world robotics applications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Decision Transformers can effectively learn from mixed-quality datasets, outperforming Behavioral Cloning 
            via return conditioning and sequence modeling. By modeling multi-modal demonstrations with GMMs and 
            benefiting from longer sequence contexts, this approach bridges the gap between RL theory and practical 
            robot imitation learning.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This work demonstrates that return-conditioned sequence models are a promising direction for real-world 
            robotics where data quality varies and online exploration is expensive or dangerous.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Contact & Collaboration
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            For questions about this research, collaboration opportunities, or implementation details, feel free to reach out:
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:omeed@cs.utexas.edu"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              omeed@cs.utexas.edu
            </a>
            <a
              href="https://github.com/jakegrigsby/robomimic-decision-transformer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
