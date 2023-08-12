import Menu from "./menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="flex" style={{ backgroundColor: "#F3F3F3" }}>
			<div className="mx-5 w-full">
				<h1 className="text-3xl mt-5">Brews</h1>
				<div className="brews-add" style={{ position: "absolute", top: "30px", right: "20px" }}>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Add</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px] lg:max-w-[1000px]">
							<DialogHeader>
								<DialogTitle>Add Brew</DialogTitle>
								<DialogDescription>Add details for your brew here.</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="coffeeName" className="text-right">
										Coffee Name
									</Label>
									<Input id="coffeeName" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="region" className="text-right">
										Region
									</Label>
									<Input id="region" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="roast" className="text-right">
										Roast
									</Label>
									<Input id="roast" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="roastDate" className="text-right">
										Roast Date
									</Label>
									<Input id="roastDate" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="region" className="text-right">
										Region
									</Label>
									<Input id="region" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="process" className="text-right">
										Process
									</Label>
									<Input id="process" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="brewMethod" className="text-right">
										Brew Method
									</Label>
									<Input id="brewMethod" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="grindSetting" className="text-right">
										Grind Setting
									</Label>
									<Input id="grindSetting" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="waterTemp" className="text-right">
										Water Temp
									</Label>
									<Input id="waterTemp" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="dose" className="text-right">
										Dose
									</Label>
									<Input id="dose" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="waterIn" className="text-right">
										Water In
									</Label>
									<Input id="waterIn" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="brewTime" className="text-right">
										Brew Time
									</Label>
									<Input id="brewTime" value="" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="notes" className="text-right">
										Notes
									</Label>
									<Input id="notes" value="" className="col-span-3" />
								</div>
							</div>
							<DialogFooter>
								<Button type="submit">Add brew</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
				<div className="brews">
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p>Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
					<Card className="my-3">
						<CardHeader>
							<CardTitle>Coffee Name</CardTitle>
						</CardHeader>
						<Separator style={{ marginBottom: "5px" }} />
						<CardContent className="grid grid-cols-4 gap-3">
							<div className="grid grid-cols-1">
								<p className="font-bold">Region</p>
								<p>Region Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast</p>
								<p>Roast Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Roast Date</p>
								<p>Roast Date Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Process</p>
								<p>Process Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Method</p>
								<p>Brew Method Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Grind Setting</p>
								<p>Grind Setting Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water Temp</p>
								<p>Water Temp Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Dose</p>
								<p>Dose Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Water In</p>
								<p>Water In Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Brew Time</p>
								<p>Brew Time Test Data</p>
							</div>
							<div className="grid grid-cols-1">
								<p className="font-bold">Notes</p>
								<p>Notes Test Data</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<Menu />
		</main>
	);
}
