import { Card } from "@nation3/ui-components";
import { DisputeList, DisputeListProvider } from "../components/disputes-list";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/subgraph";

const Disputes = () => {
	return (
		<div id="agreementsPage" className="w-full max-w-3xl h-2/3">
			<ApolloProvider client={client}>
				<DisputeListProvider>
					<Card className="flex flex-col w-full items-stretch gap-8 text-gray-800">
						<div className="flex flex-row items-center justify-between gap-2 text-gray-700">
							<h1 className="pl-2 font-display font-medium text-xl md:text-3xl text-slate-600">
								Open Disputes
							</h1>
						</div>
						<DisputeList />
					</Card>
				</DisputeListProvider>
			</ApolloProvider>
		</div>
	);
};

export default Disputes;